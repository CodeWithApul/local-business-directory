import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Router } from "express";

import { PrismaClient } from "../generated/prisma/client.js";
import { authMiddleware } from "../middleware/auth.js";
import { validateSchema } from "../middleware/validateSchema.js";
import {
  LoginSchema,
  UserSchema,
  VerifyOTPRequestSchema,
} from "../schema/user.js";
import { clearSecureCookie, setSecureCookie } from "../utils/cookie.js";
import sendEmail from "../utils/emailService.js";
import { generateToken, verifyRefreshToken } from "../utils/jwt.js";
import { digitOnlyOTP, sendOTPViaSMS } from "../utils/otpService.js";

import type { User, Login, VerifyOTPRequest } from "../schema/user.js";

import type { JwtPayload } from "jsonwebtoken";
import type { AuthenticatedRequest } from "../types/auth.js";
import type { Request, Response } from "express";

dotenv.config();

const router = Router();
const prisma = new PrismaClient();
const saltRounds = 2; // FIXME: Higher environments should have more saltRounds

router.get(
  "/",
  authMiddleware,
  async (_req: AuthenticatedRequest, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
  }
);

router.post(
  "/create",
  authMiddleware,
  validateSchema(UserSchema),
  async (req: AuthenticatedRequest, res: Response) => {
    const { username, email, phoneNumber, password }: User = req.body;
    const user = await prisma.user.create({
      data: {
        username,
        email: email ?? "",
        phoneNumber,
        password, // In real app, hash the password
      },
    });
    res.json(user);
  }
);

router.post(
  "/update/:id",
  authMiddleware,
  validateSchema(UserSchema),
  async (req: AuthenticatedRequest, res: Response) => {
    const userId = parseInt(req.params.id);
    const { username, email, phoneNumber, password }: User = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        password,
        email,
        phoneNumber,
      },
    });
    res.json(updatedUser);
  }
);

router.post("/generate-otp", async (req: Request, res: Response) => {
  const { email, phoneNumber, userId } = req.body;
  try {
    const otp = digitOnlyOTP(6);
    const fifteenMinutesLater = new Date(new Date().getTime() + 15 * 60 * 1000);
    await prisma.user.update({
      where: { id: parseInt(userId), email, phoneNumber },
      data: {
        verificationToken: otp,
        otpExpiredAt: fifteenMinutesLater,
      },
    });
    try {
      // Send OTP via email
      await sendEmail(email, otp);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      }
    }
    // Send OTP via SMS
    if (
      process.env.ENABLE_SMS_SERVICE &&
      process.env.ENABLE_SMS_SERVICE === "true"
    )
      await sendOTPViaSMS(phoneNumber, otp); // this will fail as twilio works only with verified numbers in trial account, ignore for now
  } catch (error) {
    console.error("Error generating or sending OTP:", error);
    return res.status(500).json({ error: "Failed to generate or send OTP" });
  }
  res.json({ message: `OTP sent to ${email}, ${phoneNumber}` });
});

router.post(
  "/verify-otp",
  validateSchema(VerifyOTPRequestSchema),
  async (req, res) => {
    const { userId, otp, password }: VerifyOTPRequest = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await prisma.user.findUnique({
      select: {
        otpExpiredAt: true,
      },
      where: {
        id: userId,
        verificationToken: otp,
        otpExpiredAt: { gt: new Date() },
      },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid / Expired OTP" });
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        verificationToken: null,
        status: "verified",
        password: hashedPassword,
      },
    });

    return res.status(200).json({ message: `OTP verified successfully!` });
  }
);

router.post("/login", validateSchema(LoginSchema), async (req, res) => {
  const { username, password }: Login = req.body;
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: username }, { phoneNumber: username }],
    },
  });
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid password" });
  }
  const { accessToken, refreshToken } = generateToken(user.id.toString());
  setSecureCookie(res, refreshToken);

  res.json({ accessToken });
});

router.post("/refresh-token", async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ error: "No refresh token provided" });
  }
  try {
    const { userId } = verifyRefreshToken(token) as JwtPayload;
    const { accessToken, refreshToken } = generateToken(userId);
    setSecureCookie(res, refreshToken);
    res.json({ accessToken });
  } catch (error) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }
});

router.post("/logout", async (req: Request, res: Response) => {
  clearSecureCookie(res);
  res.status(200).json({ message: "Logged out successfully" });
});

router.get("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  res.json(user);
});

export default router;

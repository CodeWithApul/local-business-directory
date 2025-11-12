import bcrypt from "bcrypt";
import { Router } from "express";

import { PrismaClient } from "../generated/prisma/client";
import { authMiddleware } from "../middleware/auth.middleware";
import { validateSchema } from "../middleware/validateSchema.middleware";
import { LoginSchema, UserSchema } from "../schema/user";
import { clearSecureCookie, setSecureCookie } from "../utils/cookie";
import sendEmail from "../utils/emailService";
import { generateToken, verifyRefreshToken } from "../utils/jwt";
import { digitOnlyOTP, sendOTPViaSMS } from "../utils/otpService";

import type { User, Login } from "../schema/user";

import type { JwtPayload } from "jsonwebtoken";
import type { AuthenticatedRequest } from "../types/auth";
import type { Request, Response } from "express";
const router = Router();
const prisma = new PrismaClient();
const saltRounds = 10;

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
    await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { verificationToken: otp },
    });
    // Send OTP via email
    await sendEmail(email, otp);
    // Send OTP via SMS
    await sendOTPViaSMS(phoneNumber, otp); // this will fail as twilio works only with verified numbers in trial account, ignore for now
  } catch (error) {
    console.error("Error generating or sending OTP:", error);
    return res.status(500).json({ error: "Failed to generate or send OTP" });
  }
  res.json({ message: `OTP sent to ${email}, ${phoneNumber}` });
});

router.post("/verify-otp", async (req, res) => {
  const { userId, otp, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await prisma.user.findUnique({
    where: { id: userId, verificationToken: otp },
  });
  if (!user) {
    return res.status(400).json({ error: "Invalid OTP" });
  }
  await prisma.user.update({
    where: { id: userId },
    data: {
      verificationToken: null,
      status: "verified",
      password: hashedPassword,
    },
  });

  res.json({ message: `OTP verified successfully!` });
});

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
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.json({ accessToken });
});

router.post("refresh-token", async (req, res) => {
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
  res.sendStatus(200);

  res.json({ message: "Logged out successfully" });
});

router.get("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  res.json(user);
});

export default router;

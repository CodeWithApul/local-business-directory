import { PrismaClient } from "../generated/prisma/client";
import { Router } from "express";
import bcrypt from "bcrypt";
import sendEmail from "../utils/emailService";
import { digitOnlyOTP, sendOTPViaSMS } from "../utils/otpService";

const router = Router();
const prisma = new PrismaClient();
const saltRounds = 10;

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.post("/create", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber || null,
      password: req.body.password || "defaultPassword", // In real app, hash the password
    },
  });
  res.json(user);
});

router.get("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  res.json(user);
});

router.post("/update/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    },
  });
  res.json(updatedUser);
});

router.post("/generate-otp", async (req, res) => {
  const { email, phoneNumber, userId } = req.body;
  try {
    const otp = digitOnlyOTP(6);
    await prisma.user.update({
      where: { id: userId },
      data: { verificationToken: otp },
    });
    // Send OTP via email
    await sendEmail(email, otp);
    // Send OTP via SMS (not implemented here)
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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
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
  res.json({ message: "Login successful", user });
});

export default router;

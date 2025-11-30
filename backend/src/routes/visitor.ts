import { Router } from "express";

// import { email } from "zod";
import { PrismaClient } from "../generated/prisma/client";
import { validateSchema } from "../middleware/validateSchema";
import { mobileSchema } from "../schema/user";
import { digitOnlyOTP } from "../utils/otpService";

import type { Request, Response } from "express";
const router = Router();
const prisma = new PrismaClient();

router.post(
  "/generate-otp",
  validateSchema(mobileSchema),
  async (req: Request, res: Response) => {
    const { mobile } = req.body;

    try {
      const otp = digitOnlyOTP(6);
      const fifteenMinutesLater = new Date(
        new Date().getTime() + 15 * 60 * 1000
      );
      const v = await prisma.visitor.create({
        data: {
          otp: otp,
          otpExpiredAt: fifteenMinutesLater,
          mobile,
        },
      });
      // Send OTP via SMS
      // await sendOTPViaSMS(mobile, otp);
      res.json({ id: v.id, message: `OTP sent to ${mobile}` });
    } catch (error) {
      console.error("Error generating or sending OTP:", error);
      return res.status(500).json({ error: "Failed to generate or send OTP" });
    }
  }
);

router.post("/verify-otp", async (req: Request, res: Response) => {
  const { id, otp, mobile, businessId } = req.body;
  const user = await prisma.visitor.findUnique({
    select: {
      otpExpiredAt: true,
    },
    where: {
      id,
      otp,
      mobile,
      otpExpiredAt: { gt: new Date() },
    },
  });

  if (!user) {
    return res.status(400).json({ error: "Invalid / Expired OTP" });
  }

  await prisma.visitor.update({
    where: { id },
    data: {
      otp: null,
      otpExpiredAt: null,
      status: "verified",
      // views: {
      //   create: {
      //     businessId: parseInt(businessId), // it fails when no business, ideally not the case but for now atleast
      //   },
      // },
    },
  });

  // Check if business exists
  const business = await prisma.business.findUnique({
    where: { id: parseInt(businessId) },
    include: {
      address: true,
    },
  });

  if (business) {
    await prisma.visitorBusinessView.create({
      data: {
        visitorId: id,
        businessId: business.id,
      },
    });
  }

  return res.status(200).json({
    message: `OTP verified successfully!`,
    contact: {
      name: business?.name,
      phone: business?.phoneNumber,
      email: business?.email,
      street: business?.address.street,
      city: business?.address.city,
      state: business?.address.state,
      country: business?.address.country,
      postalCode: business?.address.postalCode,
      lat: business?.address.lat,
      lon: business?.address.lon,
    },
  });
});

export default router;

import { z } from "zod/v4";

export const BusinessFormSchema = z.object({
  businessId: z.coerce.number().optional(),
  businessName: z.string(),
  category: z.coerce.number(),
  ownerName: z.string(),
  email: z.email().optional(),
  phoneNumber: z
    .string()
    .regex(
      /^[+]?[0-9]{10,15}$/,
      "Phone number must be valid and contain 10-15 digits (with optional '+')",
    ),
  state: z.string(),
  street: z.string().min(3),
  city: z.string().min(3, "Enter a valid"),
  country: z.string(),
  postalCode: z
    .string()
    .trim()
    .regex(/^(?:[A-Z0-9][A-Z0-9\s-]{2,10})$/i, "Enter a valid postal code"),
  description: z.string(),
});
export type BusinessForm = z.infer<typeof BusinessFormSchema>;

export const VerifyOtpReqSchema = z.object({
  userId: z.coerce.number("User id required"),
  otp: z
    .string()
    .trim()
    .regex(/^\d{6}$/, "OTP must be a 6-digit number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(
      /[@$!%*?&#]/,
      "Password must contain at least one special character",
    ),
});

export type VerifyOtpReq = z.infer<typeof VerifyOtpReqSchema>;

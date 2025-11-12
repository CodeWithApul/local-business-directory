import { z } from "zod/v4";

export const BusinessFormSchema = z.object({
  businessId: z.string().optional(),
  businessName: z.string(),
  category: z.string(),
  ownerName: z.string(),
  email: z.email().optional(),
  phoneNumber: z
    .string()
    .regex(
      /^[+]?[0-9]{10,15}$/,
      "Phone number must be valid and contain 10-15 digits (with optional '+')"
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

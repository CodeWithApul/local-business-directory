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
      "Phone number must be valid and contain 10-15 digits (with optional '+')"
    ),
  state: z.string(),
  street: z.string().min(3),
  city: z.string().min(3, "Enter a valid City"),
  country: z.string(),
  postalCode: z
    .string()
    .trim()
    .regex(/^(?:[A-Z0-9][A-Z0-9\s-]{2,10})$/i, "Enter a valid postal code"),
  description: z.string(),
});
export type BusinessForm = z.infer<typeof BusinessFormSchema>;

export const BusinessBookingSchema = z.object({
  id: z.coerce.number().optional(),
  // businessId: z.coerce.number().optional(),
  bookingStartTime: z
    .string("Booking start time is required")
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Booking start time must be a valid ISO date string",
    }),
  bookingEndTime: z
    .string("Booking end time is required")
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Booking end time must be a valid ISO date string",
    }),
  description: z.string().optional(),
  // status: z.coerce.boolean("Status is required"),
  // .refine((value) => ["booked", "pending", "cancelled"].includes(value), {
  //   message: "Status must be one of: booked, pending, cancelled",
  // }),
});
export type BusinessBooking = z.infer<typeof BusinessBookingSchema>;

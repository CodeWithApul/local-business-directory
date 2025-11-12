import { z } from "zod/v4";

export const UserSchema = z.object({
  id: z.string().min(1),
  username: z.string().min(3).max(50), // name of user
  email: z.string().email().optional(),
  phoneNumber: z
    .string()
    .trim()
    .regex(
      /^[+]?[0-9]{10,15}$/,
      "Phone number must be valid and contain 10-15 digits (with optional '+')"
    ),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must not exceed 16 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

export type User = z.infer<typeof UserSchema>;

export const LoginSchema = z.object({
  username: z.union([
    z.email({ message: "Invalid email format" }),
    z
      .string()
      .trim()
      .regex(
        /^[+]?[0-9]{10,15}$/,
        "Mobile number must be valid and contain 10-15 digits (with optional '+')"
      ),
  ]),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must not exceed 16 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

export type Login = z.infer<typeof LoginSchema>;

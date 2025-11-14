import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .test(
      "email-or-phone",
      "Invalid email format or mobile number must be valid and contain 10–15 digits (with optional '+')",
      (value) => {
        if (!value) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phoneRegex = /^[+]?[0-9]{10,15}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),

  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password must not exceed 16 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
});

export type LoginFormValues = yup.InferType<typeof LoginFormSchema>;

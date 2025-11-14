import type { LoginFormSchema } from "../Schema/authRelatedSchema";
import { type InferType } from "yup";

export enum LoginTypes {
  SHOP_LOGIN = "SHOP",
  USER_LOGIN = "USER",
}

export type LoginFormValues = InferType<typeof LoginFormSchema>;

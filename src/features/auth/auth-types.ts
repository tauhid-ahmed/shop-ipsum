import { z } from "zod";
import { LoginSchema } from "./auth-schema";

export type LoginFormType = {
  email: string;
  password: string;
  remember?: boolean;
};

export type RegisterFormType = {
  email: string;
  password: string;
  confirm_password: string;
};

// Define your error type. You can customize this based on your needs.
type FormError = {
  [K in keyof FormInput]?: string[];
};
type FormInput = z.infer<typeof LoginSchema>;
// Define the FormState type
export type FormState = {
  errors?: FormError;
  message?: string;
  success?: boolean;
  data?: FormInput;
};

import z from "zod";
import { VALIDATION_MESSAGES as MSG } from "../constant";

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: MSG.EMAIL_REQUIRED })
    .email(MSG.EMAIL_REQUIRED),
  password: z
    .string({ required_error: MSG.PASSWORD_REQUIRED })
    .min(MSG.PASSWORD_MIN_LENGTH, {
      message: MSG.PASSWORD_MIN,
    })
    .trim(),
  remember_me: z.boolean().optional().default(false),
});

export const registerFormSchema = z
  .object({
    email: z
      .string({ required_error: MSG.EMAIL_REQUIRED })
      .email(MSG.EMAIL_REQUIRED),
    password: z
      .string({ required_error: MSG.PASSWORD_REQUIRED })
      .min(MSG.PASSWORD_MIN_LENGTH, {
        message: MSG.PASSWORD_MIN,
      })
      .max(64, { message: MSG.PASSWORD_MAX })
      .regex(/[A-Z]/, {
        message: MSG.PASSWORD_UPPERCASE,
      })
      .regex(/[a-z]/, {
        message: MSG.PASSWORD_LOWERCASE,
      })
      .regex(/[0-9]/, { message: MSG.PASSWORD_NUMBER })
      .regex(/[^A-Za-z0-9]/, {
        message: MSG.PASSWORD_SPECIAL_CHAR,
      })
      .trim(),
    confirm_password: z.string({ required_error: MSG.PASSWORD_MISMATCH }),
    terms_and_condition: z.boolean({
      required_error: MSG.TERMS_REQUIRED,
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: MSG.PASSWORD_MISMATCH,
    path: ["confirm_password"],
  });

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

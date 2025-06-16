import z from "zod";
import { VALIDATION_MESSAGES as MSG } from "./validation-messages";

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: MSG.EMAIL.REQUIRED })
    .email(MSG.EMAIL.INVALID),
  password: z
    .string({ required_error: MSG.PASSWORD.REQUIRED })
    // .min(8, { message: MSG.PASSWORD.MIN })
    .max(64, { message: MSG.PASSWORD.MAX })
    .trim(),
  remember_me: z.boolean().optional().default(false),
  callbackUrl: z.string().optional(),
});

export const registerFormSchema = z
  .object({
    name: z
      .string({ required_error: MSG.NAME.REQUIRED })
      .min(3, { message: MSG.NAME.MIN })
      .max(20, { message: MSG.NAME.MAX })
      .trim(),

    email: z
      .string({ required_error: MSG.EMAIL.REQUIRED })
      .email(MSG.EMAIL.INVALID),
    password: z
      .string({ required_error: MSG.PASSWORD.REQUIRED })
      .min(8, { message: MSG.PASSWORD.MIN })
      .max(64, { message: MSG.PASSWORD.MAX })
      .regex(/[A-Z]/, {
        message: MSG.PASSWORD.UPPERCASE,
      })
      .regex(/[a-z]/, {
        message: MSG.PASSWORD.LOWERCASE,
      })
      .regex(/[0-9]/, { message: MSG.PASSWORD.NUMBER })
      .regex(/[^A-Za-z0-9]/, {
        message: MSG.PASSWORD.SPECIAL_CHAR,
      })
      .trim(),
    confirm_password: z
      .string({ required_error: MSG.PASSWORD.MISMATCH })
      .min(8, { message: MSG.PASSWORD.MIN })
      .max(64, { message: MSG.PASSWORD.MAX }),
    terms_and_condition: z.boolean({
      required_error: MSG.TERMS.REQUIRED,
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: MSG.PASSWORD.MISMATCH,
    path: ["confirm_password"],
  });

export const forgotPasswordEmailSchema = z.object({
  email: z
    .string({ required_error: MSG.EMAIL.REQUIRED })
    .email(MSG.EMAIL.INVALID),
});

export const resetPasswordSchema = z.object({
  password: z
    .string({ required_error: MSG.PASSWORD.REQUIRED })
    .min(8, { message: MSG.PASSWORD.MIN }) // minLength 8
    .max(64, { message: MSG.PASSWORD.MAX }) // maxLength 64
    .regex(/[A-Z]/, {
      message: MSG.PASSWORD.UPPERCASE,
    })
    .regex(/[a-z]/, {
      message: MSG.PASSWORD.LOWERCASE,
    })
    .regex(/[0-9]/, { message: MSG.PASSWORD.NUMBER })
    .regex(/[^A-Za-z0-9]/, {
      message: MSG.PASSWORD.SPECIAL_CHAR,
    })
    .trim(),
  confirm_password: z
    .string({ required_error: MSG.PASSWORD.MISMATCH })
    .min(8, { message: MSG.PASSWORD.MIN }) // minLength 8
    .max(64, { message: MSG.PASSWORD.MAX }), // maxLength 64
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
export type ForgotPasswordEmailSchema = z.infer<
  typeof forgotPasswordEmailSchema
>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

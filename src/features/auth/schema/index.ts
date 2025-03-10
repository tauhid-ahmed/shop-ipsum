import z from "zod";

const PASSWORD_LENGTH = 6;

export const SignInFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(PASSWORD_LENGTH, {
      message: "Password must be at least 8 characters long",
    })
    .max(64, { message: "Password cannot exceed 64 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    })
    .trim(),
  remember: z.boolean({ required_error: "Remember me is required" }),
});

export const RegisterFormSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Email is required"),
    password: z.string({ required_error: "Password is required" }).trim(),
    confirm_password: z.string({ required_error: "Password does not match!" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password does not match!",
    path: ["confirm_password"],
  });

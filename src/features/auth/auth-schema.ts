import z from "zod";

const PASSWORD_LENGTH = 4;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(PASSWORD_LENGTH, {
      message: `Password must be at least ${PASSWORD_LENGTH} characters long`,
    })
    .max(128, { message: "Password cannot exceed 128 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character (@$!%*?&)",
    })
    .trim(),
  remember: z.boolean().default(false),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(PASSWORD_LENGTH, {
    message: "Password must be at least 4 characters long",
  }),
  confirm_password: z.string().min(PASSWORD_LENGTH, {
    message: "Password must be at least 4 characters long",
  }),
});

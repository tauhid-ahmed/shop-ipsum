import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z
      .string()
      .url("❌ Invalid or missing DATABASE_URL. Must be a valid URL."),

    AUTH_SECRET: z
      .string()
      .min(1, "❌ AUTH_SECRET is required for authentication security."),

    AUTH_GOOGLE_ID: z
      .string()
      .min(1, "❌ Missing Google OAuth Client ID (AUTH_GOOGLE_ID)."),

    AUTH_GOOGLE_SECRET: z
      .string()
      .min(1, "❌ Missing Google OAuth Client Secret (AUTH_GOOGLE_SECRET)."),

    AUTH_GITHUB_ID: z
      .string()
      .min(1, "❌ Missing GitHub OAuth Client ID (AUTH_GITHUB_ID)."),

    AUTH_GITHUB_SECRET: z
      .string()
      .min(1, "❌ Missing GitHub OAuth Client Secret (AUTH_GITHUB_SECRET)."),

    EMAIL_FROM: z
      .string()
      .email("❌ EMAIL_FROM must be a valid email address."),

    EMAIL_PASS: z
      .string()
      .min(1, "❌ EMAIL_PASS is required to authenticate email sender."),
  },

  client: {
    NEXT_PUBLIC_APP_NAME: z
      .string()
      .min(
        2,
        "❌ App name must be at least 2 characters long (NEXT_PUBLIC_APP_NAME)."
      ),

    NEXT_PUBLIC_APP_DESCRIPTION: z
      .string()
      .min(
        10,
        "❌ App description must be at least 10 characters long (NEXT_PUBLIC_APP_DESCRIPTION)."
      ),

    NEXT_PUBLIC_APP_URL: z
      .string()
      .url("❌ NEXT_PUBLIC_APP_URL must be a valid URL.")
      .default("http://localhost:3000"),

    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production"], {
      errorMap: () => ({
        message:
          "❌ NEXT_PUBLIC_NODE_ENV must be either 'development' or 'production'.",
      }),
    }),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,

    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,

    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,

    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_PASS: process.env.EMAIL_PASS,

    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  },
});

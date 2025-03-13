import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    AUTH_SECRET: z.string().min(1, "Auth secret must be provided"),
    GOOGLE_ID: z.string().min(1, "Google ID must be provided"),
    GOOGLE_SECRET: z.string().min(1, "Google secret must be provided"),
    GITHUB_ID: z.string().min(1, "Github ID must be provided"),
    GITHUB_SECRET: z.string().min(1, "Github secret must be provided"),
  },

  client: {
    NEXT_PUBLIC_APP_NAME: z
      .string()
      .min(2, "App name must have at least 2 characters"),
    NEXT_PUBLIC_APP_DESCRIPTION: z
      .string()
      .min(10, "App description is required"),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
});

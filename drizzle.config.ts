import dotenv from "dotenv";
dotenv.config({
  path: "./.env.local",
});

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

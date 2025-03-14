import dotenv from "dotenv";
dotenv.config({
  path: "./.env.local",
});
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schemas";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in environment variables.");
}

export const db = drizzle({
  connection: databaseUrl,
  schema: schema,
});

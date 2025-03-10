import dotenv from "dotenv";
dotenv.config({
  path: "./.env.local",
});
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schemas";

export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  schema,
});

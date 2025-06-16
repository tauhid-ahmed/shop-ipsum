import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { sendEmail } from "./routes/";

// export const runtime = "edge";

const app = new Hono()
  .basePath("/api")
  // middlewares
  .use("*", logger())
  .use("*", cors())
  .route("/send-email", sendEmail);

export const GET = handle(app);
export const POST = handle(app);
export type AppType = typeof app;

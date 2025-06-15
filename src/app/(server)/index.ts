import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

// export const runtime = "edge";

const app = new Hono()
  .basePath("/api")
  // middleware
  .use(logger())
  .use(cors());

export const GET = handle(app);
export const POST = handle(app);
export type AppType = typeof app;

"use server";

import { auth } from "@/auth";
import type { Session } from "next-auth";

export async function getServerSession(): Promise<Session["user"] | null> {
  const session = await auth();
  return session?.user ?? null;
}

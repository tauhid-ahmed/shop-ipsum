"use server";
import { signIn } from "@/auth";

export async function socialAction(provider: "google" | "github") {
  await signIn(provider);
}

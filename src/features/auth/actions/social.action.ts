"use server";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/lib/constants/paths";

export async function socialAction(provider: "google" | "github") {
  await signIn(provider, { callbackUrl: defaultRedirectPath() });
}

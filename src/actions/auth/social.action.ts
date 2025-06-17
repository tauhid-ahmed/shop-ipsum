"use server";
import { signIn } from "@/auth";
import { defaultRedirectRoute } from "@/constants/paths";

export async function socialAction(provider: "google" | "github") {
  await signIn(provider, { callbackUrl: defaultRedirectRoute() });
}

"use server";
import { getVerificationTokenByToken } from "@/db/queries/email-verify";
import { NotifyType } from "../types";
import { createEmailVerification } from "@/db/mutations/email-verify";
import { signIn } from "@/auth";

export const tokenVerifyAction = async (token: string): Promise<NotifyType> => {
  const tokenData = await getVerificationTokenByToken(token);
  if (!tokenData) return { message: "Invalid token", type: "error" };
  const now = new Date();
  const isExpired = tokenData.expires <= now;

  if (isExpired)
    return {
      message: "Token is expired",
      type: "error",
    };

  const user = await createEmailVerification(tokenData.identifier);
  if (!user)
    return {
      message: "User not found",
      type: "error",
    };

  await signIn("credentials", {
    email: user[0].email,
    redirectTo: "/",
  });

  return {
    message: "Token is valid",
    type: "success",
  };
};

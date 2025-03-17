"use server";
import { getVerificationTokenByToken } from "@/db/queries/email-verify";
import { NotifyType } from "../types";
import {
  createEmailVerification,
  deleteVerificationToken,
} from "@/db/mutations/email-verify";
import { signIn } from "@/auth";
import { VALIDATION_MESSAGES } from "../data";

export const tokenVerifyAction = async (token: string): Promise<NotifyType> => {
  const tokenData = await getVerificationTokenByToken(token);
  if (!tokenData)
    return { message: VALIDATION_MESSAGES.TOKEN.INVALID, type: "error" };
  const now = new Date();
  const isExpired = new Date(tokenData.expires) <= now;

  if (isExpired)
    return {
      message: VALIDATION_MESSAGES.TOKEN.EXPIRED,
      type: "error",
    };

  const user = await createEmailVerification(tokenData.identifier);

  if (!user?.name) {
    return {
      message: "User not found",
      type: "error",
    };
  }

  if (user.name) {
    await deleteVerificationToken(tokenData.identifier);
    await signIn("credentials", {
      email: user.email,
    });
    return {
      message: VALIDATION_MESSAGES.TOKEN.VERIFIED,
      type: "success",
    };
  }

  await signIn("credentials", {
    email: user.email,
    redirectTo: "/",
  });

  return {
    message: "Token is valid",
    type: "success",
  };
};

"use server";
import { getVerificationTokenByToken } from "@/db/queries/verification";
import {
  createVerificationToken,
  deleteVerificationToken,
} from "@/db/mutations/verification";
import { signIn } from "@/auth";
import { VALIDATION_MESSAGES } from "@/lib/validation";
import { type Notify } from "@/app/(server)/utils/api-responses";
import { getUserByEmailWithAccount } from "@/db/queries/users";

export async function verifyEmailTokenAction(token: string): Promise<Notify> {
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

  const user = await getUserByEmailWithAccount(tokenData.identifier);

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
}

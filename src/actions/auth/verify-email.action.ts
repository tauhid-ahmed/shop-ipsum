"use server";
import { getVerificationTokenByToken } from "@/db/queries/verification";
import { deleteVerificationTokenByEmail } from "@/db/mutations/verification";
import { signIn } from "@/auth";
import { VALIDATION_MESSAGES } from "@/lib/validation";
import { ApiResponse, createSuccessResponse } from "@/utils/api-responses";
import { getUserByEmailWithAccount } from "@/db/queries/users";
import { withErrorHandler } from "@/lib/error/with-error-handler";
import { AppError } from "@/lib/error/app-error";

export const verifyEmailTokenAction = withErrorHandler(async function (
  token: string
): Promise<ApiResponse> {
  const tokenData = await getVerificationTokenByToken(token);
  if (!tokenData) throw new AppError("Token not found");

  const now = new Date();
  const isExpired = new Date(tokenData.expires) < now;

  if (isExpired) throw new AppError("Token Expired");

  const user = await getUserByEmailWithAccount(tokenData.identifier);

  if (!user?.name) throw new AppError("User not found");

  if (user.name) {
    await deleteVerificationTokenByEmail(tokenData.identifier);
    await signIn("credentials", {
      email: user.email,
    });
    return createSuccessResponse("Account verification successful");
  }

  await signIn("credentials", {
    email: user.email,
    redirectTo: "/",
  });

  return createSuccessResponse("Signin successful");
});

"use server";
import { getVerificationTokenByToken } from "@/db/queries/verification";
import { getUserByEmail } from "@/db/queries/users";
import { deleteVerificationTokenByEmail } from "@/db/mutations/verification";
import { VALIDATION_MESSAGES } from "@/lib/validation";
import { ApiResponse, createSuccessResponse } from "@/utils/api-responses";
import { withErrorHandler } from "@/lib/error/with-error-handler";
import { AppError } from "@/lib/error/app-error";
import { updateEmailVerifiedStatus } from "@/db/mutations/users";

export const verifyEmailTokenAction = withErrorHandler(async function (
  token: string
): Promise<ApiResponse> {
  const tokenData = await getVerificationTokenByToken(token);
  if (!tokenData) throw new AppError(VALIDATION_MESSAGES.TOKEN.NOT_FOUND);

  const now = new Date();
  const isExpired = new Date(tokenData.expires) < now;

  if (isExpired) throw new AppError(VALIDATION_MESSAGES.TOKEN.EXPIRED);

  const existingUser = await getUserByEmail(tokenData.identifier);

  if (!existingUser)
    throw new AppError(VALIDATION_MESSAGES.USER_RESPONSES.NOT_FOUND);

  await updateEmailVerifiedStatus(tokenData.identifier);
  await deleteVerificationTokenByEmail(tokenData.identifier);

  // Fetch the user again to get the updated emailVerified status
  const updatedUser = await getUserByEmail(tokenData.identifier);

  return createSuccessResponse({
    user: updatedUser, // Return the user object with the updated status
    message: VALIDATION_MESSAGES.ACCOUNT_VERIFICATION.VERIFICATION_SUCCESS,
  });
});

"use server";
import { signIn } from "@/auth";
import { defaultRedirectPath, verifyEmailPath } from "@/constants/paths";
import { getUserByEmail } from "@/db/queries/users";
import { decryptPassword } from "@/lib/auth-utils";
import { AppError } from "@/lib/error/app-error";
import { withErrorHandler } from "@/lib/error/with-error-handler";
import {
  signInFormSchema,
  SignInFormSchema,
  VALIDATION_MESSAGES,
} from "@/lib/validation";
import { createVerificationToken } from "@/db/mutations/verification";

import {
  ApiResponse,
  createSuccessResponse,
  createValidationErrorResponse,
} from "@/utils/api-responses";
import { redirect } from "next/navigation";

export const signInAction = withErrorHandler(
  async (formData: SignInFormSchema): Promise<ApiResponse> => {
    const safeParsedData = await signInFormSchema.safeParseAsync(formData);
    if (!safeParsedData.success)
      return createValidationErrorResponse(
        safeParsedData.error?.flatten().fieldErrors
      );

    const user = await getUserByEmail(safeParsedData.data.email);
    if (!user || !user.password)
      throw new AppError(VALIDATION_MESSAGES.USER_RESPONSES.INVALID_DATA);

    const matchedPassword = await decryptPassword(
      safeParsedData.data.password,
      user.password
    );
    if (!matchedPassword)
      throw new AppError(VALIDATION_MESSAGES.USER_RESPONSES.INVALID_DATA);

    if (!user.emailVerified) {
      const token = await createVerificationToken(user.email);
      await fetch(`http:/localhost:3000/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          token: token.token,
          callbackUrl: safeParsedData.data.callbackUrl || "",
        }),
        cache: "no-store",
      });
      redirect(verifyEmailPath());
    }

    await signIn("credentials", {
      email: user.email,
      redirectTo: safeParsedData.data.callbackUrl || defaultRedirectPath(),
    });

    return createSuccessResponse(
      VALIDATION_MESSAGES.USER_RESPONSES.LOGIN_SUCCESS
    );
  }
);

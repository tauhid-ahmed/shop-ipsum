"use server";
import { getUserByEmail } from "@/db/queries";
import { VALIDATION_MESSAGES as MSG } from "../validation-messages";

import { signInFormSchema, SignInFormSchema } from "../schema";
import { decryptPassword } from "@/lib/utils";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/constants/paths";
import { createVerificationToken } from "@/db/mutations/email-verify";

import { ERROR_CODES } from "@/constants/error-codes";
import { AuthResponse } from "../types";

export const signInAction = async (
  formData: SignInFormSchema
): Promise<AuthResponse> => {
  const parsed = await signInFormSchema.safeParseAsync(formData);

  if (!parsed.success) {
    return {
      success: false,
      errorCode: ERROR_CODES.VALIDATION_ERROR,
      statusCode: 400,
      errors: parsed.error.flatten().fieldErrors,
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };
  }

  const user = await getUserByEmail(parsed.data.email);
  if (!user || !user.password) {
    return {
      success: false,
      errorCode: ERROR_CODES.INVALID_CREDENTIALS,
      statusCode: 401,
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };
  }

  const matched = await decryptPassword(parsed.data.password, user.password);
  if (!matched) {
    return {
      success: false,
      errorCode: ERROR_CODES.INVALID_CREDENTIALS,
      statusCode: 401,
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };
  }

  if (!user.emailVerified) {
    await createVerificationToken(user.email);
    return {
      success: false,
      errorCode: ERROR_CODES.EMAIL_UNVERIFIED,
      statusCode: 403,
      notify: {
        type: "success",
        message: MSG.ACCOUNT_VERIFICATION.EMAIL_SENT,
      },
    };
  }

  await signIn("credentials", {
    email: user.email,
    redirectTo: defaultRedirectPath(),
  });

  return {
    success: true,
    data: null,
    notify: {
      type: "success",
      message: MSG.SIGNIN.SUCCESS,
    },
  };
};

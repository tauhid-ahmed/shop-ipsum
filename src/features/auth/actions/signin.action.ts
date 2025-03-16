"use server";
import { getUserByEmail } from "@/db/queries";
import { VALIDATION_MESSAGES as MSG } from "../data";

import { signInFormSchema, SignInFormSchema } from "../schema";
import { decryptPassword } from "@/lib/utils";
import { AuthResponseType } from "../types";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/constants/paths";
import { redirect } from "next/navigation";
import { createVerificationToken } from "@/db/mutations/email-verify";
import senVerificationEmail from "@/lib/resend";

export const signInAction = async (
  formData: SignInFormSchema
): Promise<AuthResponseType> => {
  const safeParsedData = await signInFormSchema.safeParseAsync(formData);

  if (!safeParsedData.success)
    return {
      ...safeParsedData.error.flatten().fieldErrors,
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };

  const user = await getUserByEmail(safeParsedData.data.email);
  if (!user)
    return {
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };

  if (!user.password)
    return {
      notify: {
        type: "error",
        message: MSG.MISC.UNKNOWN_ERROR,
      },
    };

  const isPasswordMatched = await decryptPassword(
    safeParsedData.data.password,
    user?.password
  );

  if (!isPasswordMatched)
    return {
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };

  if (!user.emailVerified) {
    const newVerificationToken = await createVerificationToken(user.email);

    if (!newVerificationToken)
      return {
        notify: {
          type: "error",
          message: MSG.MISC.UNKNOWN_ERROR,
        },
      };
    await senVerificationEmail(user.email, newVerificationToken.token);
    redirect("/auth/verify-email");
  }

  await signIn("credentials", {
    email: user.email,
    redirectTo: defaultRedirectPath(),
  });

  return {
    notify: {
      type: "success",
      message: MSG.SIGNIN.EMAIL_VERIFICATION_REQUIRED,
    },
  };
};

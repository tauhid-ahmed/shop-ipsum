"use server";
import { getUserByEmail } from "@/db/queries";
import { VALIDATION_MESSAGES as MSG } from "../constant";

import { signInFormSchema, SignInFormSchema } from "../schema";
import { decryptPassword } from "@/lib/utils";
import { AuthResponseType } from "../types";

export const signInAction = async (
  formData: SignInFormSchema
): Promise<AuthResponseType> => {
  const safeParsedData = await signInFormSchema.safeParseAsync(formData);

  if (!safeParsedData.success)
    return {
      ...safeParsedData.error.flatten().fieldErrors,
      notify: {
        type: "error",
        message: MSG.INVALID_FORM_DATA,
      },
    };

  const user = await getUserByEmail(safeParsedData.data.email.toLowerCase());
  if (!user)
    return {
      notify: {
        type: "error",
        message: MSG.INVALID_CREDENTIALS,
      },
    };

  const isPasswordMatched = await decryptPassword(
    safeParsedData.data.password,
    user.password
  );

  if (!isPasswordMatched)
    return {
      notify: {
        type: "error",
        message: MSG.INVALID_CREDENTIALS,
      },
    };

  //

  return {
    notify: {
      type: "success",
      message: MSG.SIGNIN_SUCCESS,
    },
  };
};

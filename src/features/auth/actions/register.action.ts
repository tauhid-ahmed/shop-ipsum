"use server";
import { getUserByEmail } from "@/db/queries";
import { registerFormSchema, RegisterFormSchema } from "../schema";
import { AuthResponseType } from "../types";
import { VALIDATION_MESSAGES as MSG } from "../constant";

export const registerAction = async (
  formData: RegisterFormSchema
): Promise<AuthResponseType> => {
  const safeParsedData = await registerFormSchema.safeParseAsync(formData);
  if (!safeParsedData.success)
    return {
      ...safeParsedData.error.flatten().fieldErrors,
      notify: {
        type: "error",
        message: MSG.INVALID_FORM_DATA,
      },
    };

  const user = await getUserByEmail(safeParsedData.data.email);

  if (user)
    return {
      notify: {
        type: "error",
        message: MSG.EMAIL_EXISTS,
      },
    };

  return {
    notify: {
      type: "error",
      message: MSG.ACCOUNT_CREATED,
    },
  };
};

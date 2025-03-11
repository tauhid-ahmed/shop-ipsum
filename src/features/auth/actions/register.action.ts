"use server";
import { getUserByEmail } from "@/db/queries";
import { registerFormSchema, RegisterFormSchema } from "../schema";
import { AuthResponseType } from "../types";
import { VALIDATION_MESSAGES as MSG } from "../constant";
import { encryptPassword } from "@/lib/utils";
import { createUser } from "@/db/mutations/users";

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

  const user = await getUserByEmail(
    safeParsedData.data.email.toLocaleLowerCase()
  );
  if (user)
    return {
      notify: {
        type: "error",
        message: MSG.EMAIL_ALREADY_REGISTERED,
      },
    };

  const encryptedPassword = await encryptPassword(safeParsedData.data.password);

  const data = {
    name: safeParsedData.data.name,
    email: safeParsedData.data.email.toLowerCase(),
    password: encryptedPassword,
    terms_accepted: safeParsedData.data.terms_and_condition,
  };

  const newUser = await createUser(data);

  if (!newUser)
    return {
      notify: {
        type: "error",
        message: MSG.UNKNOWN_ERROR,
      },
    };

  return {
    notify: {
      type: "success",
      message: MSG.ACCOUNT_CREATED,
    },
  };
};

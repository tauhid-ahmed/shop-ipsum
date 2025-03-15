"use server";
import { getUserByEmail } from "@/db/queries";
import { registerFormSchema, RegisterFormSchema } from "../schema";
import { AuthResponseType } from "../types";
import { VALIDATION_MESSAGES as MSG } from "../data";
import { encryptPassword } from "@/lib/utils";
import { createUser } from "@/db/mutations/users";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/constants/paths";

export const registerAction = async (
  formData: RegisterFormSchema
): Promise<AuthResponseType> => {
  const safeParsedData = await registerFormSchema.safeParseAsync(formData);
  if (!safeParsedData.success)
    return {
      ...safeParsedData.error.flatten().fieldErrors,
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };

  const user = await getUserByEmail(safeParsedData.data.email);

  if (user)
    return {
      notify: {
        type: "error",
        message: MSG.REGISTRATION.EMAIL_ALREADY_REGISTERED,
      },
    };

  const encryptedPassword = await encryptPassword(safeParsedData.data.password);

  const data = {
    name: safeParsedData.data.name,
    email: safeParsedData.data.email.toLowerCase(),
    password: encryptedPassword,
    terms_accepted: safeParsedData.data.terms_and_condition,
  };

  const [newUser] = await createUser(data);

  if (!newUser)
    return {
      notify: {
        type: "error",
        message: MSG.MISC.UNKNOWN_ERROR,
      },
    };

  await signIn("credentials", {
    email: newUser.email,
    redirectTo: defaultRedirectPath(),
  });

  return {
    notify: {
      type: "success",
      message: MSG.REGISTRATION.ACCOUNT_CREATED,
    },
  };
};

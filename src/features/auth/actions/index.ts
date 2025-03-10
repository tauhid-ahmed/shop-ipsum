"use server";

import { type SignInFormState, type RegisterFormState } from "../types";
import { SignInFormSchema, RegisterFormSchema } from "../schema";
import { encryptPassword, decryptPassword } from "@/lib/utils";
import { getUserByEmail } from "@/db/queries";

export const signInAction = async (
  prevState: SignInFormState,
  formData: FormData
) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    remember: formData.get("remember") === "on" ? true : false,
  };

  const safeParsedData = SignInFormSchema.safeParse(data);

  return {
    ...prevState,
    ...safeParsedData.error?.flatten().fieldErrors,
    success: safeParsedData.success,
    remember: data.remember,
  };
};

export const registerAction = async (
  prevState: RegisterFormState,
  formData: FormData
) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    terms_and_condition:
      formData.get("terms_and_condition") === "on" ? true : false,
  };
  const safeParsedData = RegisterFormSchema.safeParse(data);

  const errors = safeParsedData.error?.flatten();

  // if (safeParsedData.success) {
  //   const { email, password, terms_and_condition } = safeParsedData.data;
  //   const hashedPassword = encryptPassword(password);
  // }

  return {
    ...prevState,
    // ...errors,
    ...safeParsedData.error?.flatten(),
    terms_and_condition: data.terms_and_condition,
    success: safeParsedData.success,
  };
};

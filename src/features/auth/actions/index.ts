"use server";

import { type SignInFormState, type RegisterFormState } from "../types";
import { SignInSchema, RegisterSchema } from "../schema";

export const signInAction = async (
  prevState: SignInFormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    remember: formData.get("remember") === "on" ? true : false,
  };

  const safeParsedData = SignInSchema.safeParse(data);

  return {
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
  };
  const safeParsedData = RegisterSchema.safeParse(data);
  console.log({ safeParsedData });
  return {
    ...safeParsedData.error?.flatten().fieldErrors,
    success: safeParsedData.success,
  };
};

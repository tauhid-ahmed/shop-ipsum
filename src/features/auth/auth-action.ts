"use server";
import z from "zod";
import {
  FormState,
  type LoginFormType,
  type RegisterFormType,
} from "./auth-types";
import { LoginSchema } from "./auth-schema";

export const signInAction = async (
  prevState: FormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    remember: formData.get("remember") === "on" ? true : false,
  } as LoginFormType;

  const safeParsedData = LoginSchema.safeParse(data);
  // if (!safeParsedData.success) return safeParsedData.error.flatten();
  // else return safeParsedData.data;
  return prevState;
};

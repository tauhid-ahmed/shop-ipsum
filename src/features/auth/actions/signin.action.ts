"use server";
import { VALIDATION_MESSAGES as MSG } from "../constant";

import {
  signInFormSchema,
  registerFormSchema,
  RegisterFormSchema,
  SignInFormSchema,
} from "../schema";
import { encryptPassword, decryptPassword } from "@/lib/utils";
import { getUserByEmail } from "@/db/queries";
import { AuthResponseType } from "../types";

export const signInAction = async (formData: SignInFormSchema) => {};

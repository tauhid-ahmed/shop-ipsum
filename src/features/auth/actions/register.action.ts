"use server";

import { createVerificationToken } from "@/db/mutations/email-verify";
import { createUser } from "@/db/mutations/users";
import { getUserByEmail } from "@/db/queries";
import { encryptPassword } from "@/lib/utils";
import { registerFormSchema, RegisterFormSchema } from "../schema";
import { type AuthResponse } from "../types";
import { VALIDATION_MESSAGES as MSG } from "../validation-messages";

export const registerAction = async (
  formData: RegisterFormSchema
): Promise<AuthResponse> => {
  // Form data validation with zod
  const safeParsedData = await registerFormSchema.safeParseAsync(formData);
  if (!safeParsedData.success) {
    return {
      ...safeParsedData.error.flatten().fieldErrors,
      notify: {
        type: "error",
        message: MSG.SIGNIN.INVALID_CREDENTIALS,
      },
    };
  }

  const data = safeParsedData.data;

  // Checking if user with the email address is already exits;
  const existingUser = await getUserByEmail(data.email);
  if (existingUser) {
    return {
      notify: {
        type: "error",
        message: MSG.REGISTRATION.EMAIL_ALREADY_REGISTERED,
      },
    };
  }

  // Encrypt user password
  const encryptedPassword = await encryptPassword(data.password);

  // Create new user data;
  const newUserData = {
    name: data.name,
    email: data.email.toLowerCase(),
    password: encryptedPassword,
    terms_accepted: data.terms_and_condition,
  };

  // ইউজার তৈরি
  const [newUser] = await createUser(newUserData);

  // ইমেইল ভেরিফাই করা হয় নি, টোকেন তৈরি ও মেইল সেন্ড করা
  if (!newUser.emailVerified) {
    await createVerificationToken(newUser.email);
    return {
      notify: {
        type: "success",
        message: MSG.ACCOUNT_VERIFICATION.EMAIL_SENT,
      },
    };
  }

  // সব ঠিক থাকলে সফলতার মেসেজ রিটার্ন করা
  return {
    notify: {
      type: "success",
      message: MSG.REGISTRATION.ACCOUNT_CREATED,
    },
  };
};

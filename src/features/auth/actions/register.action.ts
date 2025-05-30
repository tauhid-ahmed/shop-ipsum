"use server";

import { createVerificationToken } from "@/db/mutations/email-verify";
import { createUser } from "@/db/mutations/users";
import { getUserByEmail } from "@/db/queries";
import { encryptPassword } from "@/lib/utils";
import { registerFormSchema, RegisterFormSchema } from "../schema";
import { VALIDATION_MESSAGES as MSG } from "../validation-messages";

import { withErrorHandler } from "@/lib/error/with-error-handler";
import {
  successResponse,
  validationErrorResponse,
  type ApiResponse,
} from "@/utils/api-responses";
import { ApiError } from "next/dist/server/api-utils";

export const registerAction = withErrorHandler(
  async (formData: RegisterFormSchema): Promise<ApiResponse> => {
    // Form data validation with zod
    const safeParsedData = await registerFormSchema.safeParseAsync(formData);
    if (!safeParsedData.success) {
      return validationErrorResponse(
        safeParsedData.error.flatten().fieldErrors
      );
    }

    const data = safeParsedData.data;

    // Checking if user with the email address is already exits;
    const existingUser = await getUserByEmail(data.email);
    if (existingUser)
      throw new ApiError(409, MSG.REGISTRATION.EMAIL_ALREADY_REGISTERED);

    // Encrypt user password
    const encryptedPassword = await encryptPassword(data.password);

    // Create new user data;
    const newUserData = {
      name: data.name,
      email: data.email.toLowerCase(),
      password: encryptedPassword,
      terms_accepted: data.terms_and_condition,
    };

    // Create new user in the database
    const [newUser] = await createUser(newUserData);

    // Verify email
    if (!newUser.emailVerified) {
      await createVerificationToken(newUser.email);
      return successResponse({}, "Email verification code sent");
    }

    // Account creation successful
    return successResponse(MSG.REGISTRATION.ACCOUNT_CREATED);
  }
);

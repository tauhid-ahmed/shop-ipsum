"use server";
import { createUser } from "@/db/mutations/users";
import { createVerificationToken } from "@/db/mutations/verification";
import { getUserByEmail } from "@/db/queries/users";
import { encryptPassword } from "@/lib/auth-utils";
import {
  registerFormSchema,
  RegisterFormSchema,
  VALIDATION_MESSAGES,
} from "@/lib/validation";

import { verifyEmailPath } from "@/constants/paths";
import { AppError } from "@/lib/error/app-error";
import { withErrorHandler } from "@/lib/error/with-error-handler";
import {
  createValidationErrorResponse,
  type ApiResponse,
} from "@/utils/api-responses";
import { redirect } from "next/navigation";

export const registerUserAction = withErrorHandler(
  async (formData: RegisterFormSchema): Promise<ApiResponse> => {
    // Form data validation with zod
    const safeParsedData = await registerFormSchema.safeParseAsync(formData);
    if (!safeParsedData.success) {
      return createValidationErrorResponse(
        safeParsedData.error.flatten().fieldErrors
      );
    }

    const data = safeParsedData.data;

    // Checking if user with the email address is already exits;
    const existingUser = await getUserByEmail(data.email);
    if (existingUser)
      throw new AppError(VALIDATION_MESSAGES.USER_RESPONSES.ALREADY_EXISTS, {
        code: "EMAIL_EXISTS",
      });

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

    // Account creation successful && verify email process starts
    const token = await createVerificationToken(newUser.email);
    await fetch(`http:/localhost:3000/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUserData.name,
        email: newUser.email,
        token: token.token,
      }),
      cache: "no-store",
    });
    redirect(verifyEmailPath());
  }
);

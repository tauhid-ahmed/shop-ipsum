"use server";

import { createVerificationToken } from "@/db/mutations/verification";
import { createUser } from "@/db/mutations/users";
import { getUserByEmail } from "@/db/queries/users";
import { encryptPassword } from "@/lib/auth-utils";
import {
  registerFormSchema,
  RegisterFormSchema,
  VALIDATION_MESSAGES as MSG,
} from "@/lib/validation";

import { withErrorHandler } from "@/lib/error/with-error-handler";
import {
  createSuccessResponse,
  createValidationErrorResponse,
  type ApiResponse,
} from "@/utils/api-responses";
import { AppError } from "@/lib/error/app-error";
import { cookies } from "next/headers";
import { signIn } from "@/auth";

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
      throw new AppError(MSG.REGISTRATION.EMAIL_ALREADY_REGISTERED, {
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

    // Account creation successful &&  Verify email
    await createVerificationToken(newUser.email);
    const cookieStore = await cookies();
    cookieStore.set({
      name: "userId",
      value: newUser.id,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 15,
      sameSite: "strict",
    });

    await signIn("credentials", {
      email: newUser.email,
    });

    return createSuccessResponse({}, "Email verification code sent");
  }
);

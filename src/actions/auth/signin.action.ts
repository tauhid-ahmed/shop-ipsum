"use server";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/constants/paths";
import { getUserByEmail } from "@/db/queries/users";
import { decryptPassword } from "@/lib/auth-utils";
import { AppError } from "@/lib/error/app-error";
import { withErrorHandler } from "@/lib/error/with-error-handler";
import { signInFormSchema, SignInFormSchema } from "@/lib/validation";
import {
  ApiResponse,
  createSuccessResponse,
  createValidationErrorResponse,
} from "@/utils/api-responses";

export const signInAction = withErrorHandler(
  async (formData: SignInFormSchema): Promise<ApiResponse> => {
    const safeParsedData = await signInFormSchema.safeParseAsync(formData);
    if (!safeParsedData.success)
      return createValidationErrorResponse(
        safeParsedData.error?.flatten().fieldErrors
      );

    const user = await getUserByEmail(safeParsedData.data.email);
    if (!user || !user.password)
      throw new AppError("Invalid credentials", { code: "" });

    const matchedPassword = await decryptPassword(
      safeParsedData.data.password,
      user.password
    );
    if (!matchedPassword)
      throw new AppError("Invalid credentials!", { code: "" });

    // if (!user.emailVerified) {
    //   if (!user.email) throw new AppError("Email is required");
    //   await createVerificationToken(user.email);
    //   return successResponse("");
    // }

    await signIn("credentials", {
      email: user.email,
      redirectTo: defaultRedirectPath(),
    });

    return createSuccessResponse("Signed in successful!");
  }
);

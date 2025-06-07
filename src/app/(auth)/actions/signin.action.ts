"use server";
import { signIn } from "@/auth";
import { createVerificationToken } from "@/db/mutations/verification";
import { getUserByEmail } from "@/db/queries/users";
import { defaultRedirectPath } from "@/constants/paths";
import { AppError } from "@/lib/error/app-error";
import { decryptPassword } from "@/lib/utils";
import {
  ApiResponse,
  successResponse,
  validationErrorResponse,
} from "@/utils/api-responses";
import {
  signInFormSchema,
  SignInFormSchema,
} from "../_components/validators-schema";
import { withErrorHandler } from "@/lib/error/with-error-handler";

export const signInAction = withErrorHandler(
  async (formData: SignInFormSchema): Promise<ApiResponse> => {
    const safeParsedData = await signInFormSchema.safeParseAsync(formData);
    if (!safeParsedData.success)
      return validationErrorResponse(
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

    return successResponse("Signed in successful!");
  }
);

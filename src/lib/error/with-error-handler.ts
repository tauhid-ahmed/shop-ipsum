import { AppError } from "./app-error";
import { createErrorResponse, type ApiResponse } from "@/utils/api-responses";

// Define a type for errors that might have a 'digest' property,
// common in Next.js specific errors like redirection.
interface NextErrorWithDigest extends Error {
  digest: string;
}

// Helper to check for Next.js redirect errors
const isNextRedirectError = (error: unknown): error is NextErrorWithDigest => {
  return (
    error instanceof Error &&
    "digest" in error &&
    typeof error.digest === "string" &&
    error.digest.startsWith("NEXT_REDIRECT")
  );
};

// Define the function signature more precisely
type AsyncApiFunction = (...args: readonly unknown[]) => Promise<ApiResponse>;

export function withErrorHandler<T extends AsyncApiFunction>(
  fn: T
): (...args: Parameters<T>) => Promise<ApiResponse> {
  return async (...args: Parameters<T>): Promise<ApiResponse> => {
    try {
      return await fn(...args);
    } catch (error: unknown) {
      // If it's a Next.js redirect error, re-throw it to let Next.js handle it
      if (isNextRedirectError(error)) {
        throw error;
      }

      if (error instanceof AppError) {
        console.log(error);
        return createErrorResponse(
          error.message || "An error occurred",
          error.code || "APP_ERROR",
          typeof error.cause === "number" ? error.cause : 500
        );
      }

      console.error("Unknown error in withErrorHandler:", error);

      return createErrorResponse(
        error instanceof Error ? error.message : "Unknown error occurred",
        "UNKNOWN_ERROR",
        500
      );
    }
  };
}

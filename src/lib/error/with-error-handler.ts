import { AppError } from "./app-error";
import { createErrorResponse, type ApiResponse } from "@/utils/api-responses";

export function withErrorHandler<
  T extends (...args: any[]) => Promise<ApiResponse>
>(fn: T): T {
  return (async (...args: Parameters<T>): Promise<ApiResponse> => {
    try {
      return await fn(...args);
    } catch (error: unknown) {
      if (error instanceof AppError) {
        console.log(error);
        return createErrorResponse(
          error.message || "An error occurred",
          error.code || "APP_ERROR",
          typeof error.cause === "number" ? error.cause : 500
        );
      }
      return createErrorResponse(
        error instanceof Error ? error.message : "Unknown error",
        "UNKNOWN_ERROR",
        500
      );
    }
  }) as T;
}

import { AppError } from "./app-error";
import { errorResponse, type ApiResponse } from "@/utils/api-responses";

export function withErrorHandler<
  T extends (...args: any[]) => Promise<ApiResponse>
>(fn: T): T {
  return (async (...args: Parameters<T>): Promise<ApiResponse> => {
    try {
      return await fn(...args);
    } catch (error: unknown) {
      if (error instanceof AppError) {
        console.log(error);
        return errorResponse(
          error.message || "An error occurred",
          error.code || "APP_ERROR",
          typeof error.cause === "number" ? error.cause : 500
        );
      }
      // Unexpected বা অন্য কোনো error হলে generic message পাঠান
      return errorResponse(
        error instanceof Error ? error.message : "Unknown error",
        "UNKNOWN_ERROR",
        500
      );
    }
  }) as T;
}

export interface Notification {
  type: "success" | "error" | "info" | "warning";
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  statusCode: number;
  data?: T;
  errorCode?: string;
  errors?: Record<string, string[]>;
  notification?: Notification;
  redirectUrl?: string;
}

/**
 * Creates a successful API response.
 * @param data - Response payload data
 * @param message - Optional success notification message
 * @returns ApiResponse with success true and statusCode 200
 */
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  redirectUrl?: string
): ApiResponse<T> {
  return {
    success: true,
    statusCode: 200,
    redirectUrl,
    data,
    ...(message && {
      notification: {
        type: "success",
        message,
      },
    }),
  };
}

/**
 * Creates a validation error API response.
 * @param errors - Validation error details keyed by field names
 * @param message - Optional notification message (default: generic prompt)
 * @returns ApiResponse with success false and statusCode 400
 */
export function createValidationErrorResponse(
  errors: Record<string, string[]>,
  message = "Please fix the highlighted errors."
): ApiResponse<null> {
  return {
    success: false,
    statusCode: 400,
    errorCode: "VALIDATION_ERROR",
    errors,
    notification: {
      type: "error",
      message,
    },
  };
}

/**
 * Creates a generic error API response.
 * @param message - Error message
 * @param errorCode - Optional error code (default: UNKNOWN_ERROR)
 * @param statusCode - Optional HTTP status code (default: 500)
 * @returns ApiResponse with success false
 */
export function createErrorResponse(
  message: string,
  errorCode = "UNKNOWN_ERROR",
  statusCode = 500
): ApiResponse<null> {
  return {
    success: false,
    statusCode,
    errorCode,
    notification: {
      type: "error",
      message,
    },
  };
}

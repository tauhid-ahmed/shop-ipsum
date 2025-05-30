export interface Notify {
  notify?: {
    type: "success" | "error" | "info" | "warning";
    message: string;
  };
}

export interface ApiResponse<T = unknown> extends Notify {
  success: boolean;
  data?: T;
  errorCode?: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

export function successResponse<T>(data: T, message?: string): ApiResponse<T> {
  console.log({ data, message });
  return {
    success: true,
    statusCode: 200,
    data,
    ...(message && {
      notify: {
        type: "success",
        message,
      },
    }),
  };
}

export function validationErrorResponse(
  errors: Record<string, string[]>,
  message = "Please fix the highlighted errors."
): ApiResponse {
  return {
    success: false,
    errorCode: "VALIDATION_ERROR",
    statusCode: 400,
    errors,
    notify: {
      type: "error",
      message,
    },
  };
}

export function errorResponse(
  message: string,
  errorCode = "UNKNOWN_ERROR",
  statusCode = 500
): ApiResponse {
  return {
    success: false,
    errorCode,
    statusCode,
    notify: {
      type: "error",
      message,
    },
  };
}

/**
 * Generic custom error class for application-specific errors.
 * Can include an optional error code and additional details.
 */
export class AppError extends Error {
  public readonly code?: string;
  public readonly details?: unknown;
  public readonly cause?: unknown;

  constructor(
    message: string,
    options?: {
      code?: string;
      details?: unknown;
      cause?: unknown;
    }
  ) {
    super(message);
    this.name = this.constructor.name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.code = options?.code;
    this.details = options?.details;
    this.cause = options?.cause;
  }
}

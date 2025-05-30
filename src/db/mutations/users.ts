import { db } from "@/db";
import { type UserType, users } from "@/db/schemas";
import { AppError } from "@/utils/app-error";

export const createUser = async (data: UserType) => {
  try {
    const createdUser = await db.insert(users).values(data).returning();

    if (!createdUser.length) {
      // Insert didn't throw, but no data returned
      throw new AppError("User insertion returned empty result.");
    }
    return createdUser;
  } catch (error: unknown) {
    // Log error for debugging (only in dev or with logger)
    console.error("Failed to create user:", error);

    // Throw a clear custom error for the caller
    throw new AppError("Failed to create user. Please try again.");
  }
};

import { NewUserType } from "@/features/auth/types";
import { db } from "..";
import { users } from "../schemas";
import { eq } from "drizzle-orm";

export const createUser = async (data: NewUserType) => {
  try {
    return await db.insert(users).values(data).returning();
  } catch {
    return [];
  }
};

export const updateUserEmailVerification = async (id: string) => {
  try {
    return await db
      .update(users)
      .set({
        emailVerified: new Date(),
        terms_accepted: true,
        terms_accepted_at: new Date(),
      })
      .where(eq(users.id, id))
      .returning();
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

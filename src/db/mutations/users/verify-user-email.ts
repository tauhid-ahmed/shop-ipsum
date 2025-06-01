import { db, eq } from "@/db";
import { users } from "@/db/schemas";

export const updateEmailVerifiedStatus = async (email: string) =>
  await db
    .update(users)
    .set({
      emailVerified: new Date(),
    })
    .where(eq(users.email, email))
    .returning();

import { db, eq } from "@/db";
import { verificationTokens } from "@/db/schemas";

export const deleteVerificationToken = async (email: string) =>
  await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.identifier, email))
    .returning();

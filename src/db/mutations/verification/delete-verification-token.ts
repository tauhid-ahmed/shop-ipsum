import { db, eq } from "@/db";
import { verificationTokens } from "@/db/schemas";

export const deleteVerificationTokenByEmail = async (email: string) =>
  await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.identifier, email))
    .returning();

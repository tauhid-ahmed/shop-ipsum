import { db } from "..";
import { verificationTokens } from "../schemas";
import { getVerificationTokenByEmail } from "../queries";
import { generateVerificationToken } from "@/lib/generate-token";
import { eq } from "drizzle-orm";

export const createVerificationToken = async (email: string) => {
  const token = generateVerificationToken();
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db
      .delete(verificationTokens)
      .where(eq(verificationTokens.identifier, email));
  }

  try {
    return await db
      .insert(verificationTokens)
      .values({
        identifier: email,
        token,
        expires,
      })
      .returning();
  } catch {
    return null;
  }
};

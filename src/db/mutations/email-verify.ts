import { db } from "..";
import { users, verificationTokens } from "../schemas";
import { getVerificationTokenByEmail } from "../queries";
import { generateToken } from "@/lib/generate-token";
import { eq } from "drizzle-orm";

export const createVerificationToken = async (email: string) => {
  const token = generateToken();
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await deleteVerificationToken(email);
  }

  const [data] = await db
    .insert(verificationTokens)
    .values({
      identifier: email,
      token,
      expires,
    })
    .returning();

  return data;
};

export const createEmailVerificationToken = async (email: string) =>
  await db
    .update(users)
    .set({
      emailVerified: new Date(),
    })
    .where(eq(users.email, email))
    .returning();

export const deleteVerificationToken = async (email: string) =>
  await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.identifier, email))
    .returning();

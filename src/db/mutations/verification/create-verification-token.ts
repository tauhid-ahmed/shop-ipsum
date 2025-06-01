import { db } from "@/db";
import { verificationTokens } from "@/db/schemas";
import { getVerificationTokenByEmail } from "@/db/queries/verification";
import { deleteVerificationToken } from "./delete-verification-token";
import { generateToken } from "@/lib/generate-token";

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

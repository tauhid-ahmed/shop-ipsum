import { db } from "@/db";

export const getVerificationTokenByEmail = async (email: string) =>
  await db.query.verificationTokens.findFirst({
    where: (emailVerify, { eq }) => eq(emailVerify.identifier, email),
  });

import { db } from "@/db";

export const getVerificationTokenByToken = async (token: string) =>
  await db.query.verificationTokens.findFirst({
    where: (emailVerify, { eq }) => eq(emailVerify.token, token),
  });

import { db } from "..";

export const getVerificationTokenByToken = async (token: string) =>
  await db.query.verificationTokens.findFirst({
    where: (emailVerify, { eq }) => eq(emailVerify.token, token),
  });

export const getVerificationTokenByEmail = async (email: string) =>
  await db.query.verificationTokens.findFirst({
    where: (emailVerify, { eq }) => eq(emailVerify.identifier, email),
  });

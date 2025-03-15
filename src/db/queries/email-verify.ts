import { db } from "..";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    return await db.query.verificationTokens.findFirst({
      where: (emailVerify, { eq }) => eq(emailVerify.token, token),
    });
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    return await db.query.verificationTokens.findFirst({
      where: (emailVerify, { eq }) => eq(emailVerify.identifier, email),
    });
  } catch {
    return null;
  }
};

export const getTokenValidity = async (token: string) => {
  const tokenData = await getVerificationTokenByToken(token);
  if (!tokenData) return false;
  const now = new Date();
  return tokenData && tokenData.expires > now;
};

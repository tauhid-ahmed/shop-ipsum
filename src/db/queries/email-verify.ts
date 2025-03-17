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

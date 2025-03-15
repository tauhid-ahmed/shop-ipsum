"use server";
import { getVerificationTokenByToken } from "@/db/queries/email-verify";

export const tokenVerifyAction = async (token: string) => {
  const tokenData = await getVerificationTokenByToken(token);
  if (!tokenData) return false;
  const now = new Date();
  const isValid = tokenData.expires >= now;
};

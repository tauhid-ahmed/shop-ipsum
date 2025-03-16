"use server";
import { env } from "@/constants/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export default async function senVerificationEmail(
  email: string,
  token: string
) {
  const confirmationLink = `${env.NEXT_PUBLIC_APP_URL}/auth/verify-email?token=${token}`;

  return await resend.emails
    .send({
      from: "onbroading@resend.dev",
      to: email,
      subject: "Please verify your email",
      text: `Please click the following link to verify your email: ${confirmationLink}`,
    })
    .then(console.log)
    .catch(console.error);
}

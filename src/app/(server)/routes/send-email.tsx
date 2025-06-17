import { Hono } from "hono";
import nodemailer from "nodemailer";
import { env } from "@/env";
import { render } from "@react-email/render";
import { EmailVerificationTemplate } from "@/components/emails";
import { verifyEmailRoute } from "@/constants/paths";

export const sendEmail = new Hono();

sendEmail.post("/", async (c) => {
  const { name, email, token, callbackUrl } = await c.req.json();

  const html = await render(
    <EmailVerificationTemplate
      name={name}
      code={token}
      verifyUrl={`${env.NEXT_PUBLIC_APP_URL}/${verifyEmailRoute(
        callbackUrl
      )}?token=${token}`}
    />
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.EMAIL_FROM,
      pass: env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `${env.NEXT_PUBLIC_APP_NAME} <${env.EMAIL_FROM}>`,
      to: email || "tauhidahmed@gmail.com",
      subject: `Confirm Your Email to Activate Your ${env.NEXT_PUBLIC_APP_NAME} Account`,
      html: html,
      headers: {
        "X-Entity-Ref-ID": "custom-email",
      },
    });

    return c.json({ message: "Email sent successfully." }, 200);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Email error:", err);
      return c.json({ error: err.message }, 500);
    }
  }
});

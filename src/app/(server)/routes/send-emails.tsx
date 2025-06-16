import { Hono } from "hono";
import nodemailer from "nodemailer";
import { env } from "@/env";
import { render } from "@react-email/render";
import { EmailVerificationTemplate } from "@/components/emails";

export const sendEmail = new Hono();

sendEmail.post("/", async (c) => {
  const { name, email } = await c.req.json();

  const html = await render(
    <EmailVerificationTemplate
      name={name}
      code="123456"
      verifyUrl="https://yourapp.com/verify?token=abc123"
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
      from: `Your App <${env.EMAIL_FROM}>`,
      to: email || "tauhidahmed@gmail.com",
      subject: "Hello from Hono + Nodemailer!",
      html: html,
      headers: {
        "X-Entity-Ref-ID": "custom-email",
      },
    });

    return c.json({ message: "Email sent successfully." }, 200);
  } catch (err: any) {
    console.error("Email error:", err);
    return c.json({ error: err.message }, 500);
  }
});

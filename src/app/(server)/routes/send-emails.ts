import { Hono } from "hono";
import nodemailer from "nodemailer";

export const sendEmail = new Hono();

sendEmail.post("/", async (c) => {
  const { name, email } = await c.req.json();

  const emailHtml = `
    <div style="font-family: sans-serif; padding: 20px">
      <h2>Welcome, ${name}!</h2>
      <p>Thank you for trying our email service.</p>
      <p>We're glad to have you on board.</p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS, // 🔐 make sure this is set in your env
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `Your App <${process.env.EMAIL_FROM}>`,
      to: email || "tauhidahmed@gmail.com",
      subject: "Hello from Hono + Nodemailer!",
      html: emailHtml,
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

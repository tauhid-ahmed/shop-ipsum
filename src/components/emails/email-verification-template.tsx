import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Section,
} from "@react-email/components";
import { env } from "@/env";

interface EmailVerificationTemplateProps {
  name: string;
  code: string;
  verifyUrl: string;
  companyName?: string;
}

export default function EmailVerificationTemplate({
  name = "there",
  code,
  verifyUrl,
  companyName = env.NEXT_PUBLIC_APP_NAME,
}: EmailVerificationTemplateProps) {
  return (
    <Html>
      <Head>
        <title>Verify Your Account</title>
      </Head>
      <Preview>Action required: Verify your email address - {code}</Preview>
      <Body
        style={{
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          backgroundColor: "#f8fafc",
          margin: 0,
          padding: "40px 20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "48px",
            margin: "0 auto",
            maxWidth: "520px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Header */}
          <Section style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#3b82f6",
                borderRadius: "12px",
                margin: "0 auto 24px auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              🔐
            </div>
            <Heading
              style={{
                color: "#1e293b",
                fontSize: "28px",
                fontWeight: "700",
                margin: "0 0 8px 0",
                letterSpacing: "-0.5px",
              }}
            >
              Verify Your Email
            </Heading>
            <Text
              style={{
                color: "#64748b",
                fontSize: "16px",
                margin: 0,
              }}
            >
              Complete your account setup
            </Text>
          </Section>

          {/* Greeting */}
          <Section style={{ marginBottom: "32px" }}>
            <Text
              style={{
                color: "#1e293b",
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              Hello {name},
            </Text>
            <Text
              style={{
                color: "#475569",
                fontSize: "16px",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              Enter this verification code to activate your account:
            </Text>
          </Section>

          {/* Verification Code */}
          <Section
            style={{
              backgroundColor: "#f8fafc",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
              padding: "32px",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Text
              style={{
                fontSize: "40px",
                fontWeight: "700",
                letterSpacing: "8px",
                color: "#3b82f6",
                fontFamily: "'SF Mono', Monaco, 'Cascadia Code', monospace",
                margin: 0,
                userSelect: "all",
                textShadow: "0 0 20px rgba(59, 130, 246, 0.15)",
              }}
            >
              {code}
            </Text>
          </Section>

          {/* CTA Button */}
          <Section style={{ textAlign: "center", marginBottom: "32px" }}>
            <Button
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                borderRadius: "8px",
                padding: "16px 40px",
                display: "inline-block",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.25)",
              }}
            >
              Verify Account
            </Button>
          </Section>

          {/* Security Note */}
          <Section
            style={{
              backgroundColor: "#fef3c7",
              border: "1px solid #f59e0b",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "32px",
            }}
          >
            <Text
              style={{
                color: "#d97706",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              ⚡ Quick Note
            </Text>
            <Text
              style={{
                color: "#92400e",
                fontSize: "14px",
                margin: 0,
                lineHeight: "1.4",
              }}
            >
              Code expires in 10 minutes • Don&apos;t share with anyone
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ textAlign: "center" }}>
            <Text
              style={{
                color: "#94a3b8",
                fontSize: "12px",
                margin: 0,
              }}
            >
              {companyName} • Secure Authentication System
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

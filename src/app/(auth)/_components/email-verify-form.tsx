"use client";

import { verifyEmailTokenAction } from "@/actions/auth/verify-email.action";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { VALIDATION_MESSAGES } from "@/lib/validation";
import { type Notification } from "@/utils/api-responses";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React, { useState } from "react";
import { AuthCard } from "./auth-card";
import { SubmitButton } from "./submit-button";
import { AuthNotification } from "./auth-notification";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { defaultRedirectPath } from "@/constants/paths";

type EmailVerificationFormProps = {
  initialData: {
    token: string;
    message?: string; // For initial messages like "Invalid token"
  };
};

export default function EmailVerificationForm({
  initialData,
}: EmailVerificationFormProps) {
  const [verificationToken, setVerificationToken] = useState(
    initialData.token || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(
    initialData.message ? { type: "error", message: initialData.message } : null
  );
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setNotification(null); // Clear previous notifications
    setIsSubmitting(true);
    const response = await verifyEmailTokenAction(verificationToken);
    setNotification(response.notification || null);

    if (response.success && response.data?.user?.email) {
      setIsSubmitting(false);
      await signIn("credentials", {
        email: response.data.user.email,
        redirect: false, // Handle redirect manually after sign-in
      });
      router.push(defaultRedirectPath()); // Redirect to dashboard or home
    } else {
      setIsSubmitting(false);
      if (!response.notification && response.message) {
        // Fallback if notification object isn't directly on response
        setNotification({ type: "error", message: response.message });
      }
    }
  };

  return (
    <AuthCard title="Please verify your email" socialInfo={false}>
      <form onSubmit={handleSubmit}>
        <div className="w-fit mx-auto space-y-4">
          <InputOTP
            value={verificationToken}
            onChange={setVerificationToken}
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
          >
            <InputOTPGroup className="[&>*]:size-10 sm:[&>*]:size-12 [&>*]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className="[&>*]:size-10 sm:[&>*]:size-12 [&>*]:text-xl">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <AuthNotification notification={notification} />
          <SubmitButton
            disabled={verificationToken.length !== 6}
            type="submit"
            className="w-full flex items-center justify-center"
            isSubmitting={isSubmitting}
            idleLabel="Verify"
            submittingLabel="Verifying"
          />
        </div>
      </form>
    </AuthCard>
  );
}

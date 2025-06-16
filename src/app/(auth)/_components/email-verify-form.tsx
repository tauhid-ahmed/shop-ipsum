"use client";

import { verifyEmailTokenAction } from "@/actions/auth/verify-email.action";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { VALIDATION_MESSAGES } from "@/lib/validation";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React, { useState } from "react";
import { AuthCard } from "./auth-card";
import { SubmitButton } from "./submit-button";

export default function EmailVerificationForm({
  initialData,
}: {
  initialData: any;
}) {
  const [otp, setOtp] = useState(initialData.token || "");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await verifyEmailTokenAction(otp);
  };

  return (
    <AuthCard title="Please verify your email" socialInfo={false}>
      <form onSubmit={handleSubmit}>
        <div className="w-fit mx-auto space-y-4">
          <InputOTP
            value={otp}
            onChange={setOtp}
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
          <SubmitButton
            disabled={otp.length !== 6}
            type="submit"
            className="w-full flex items-center justify-center"
            isSubmitting={false}
            idleLabel="Verify"
            submittingLabel="Verifying"
          />
        </div>
      </form>
    </AuthCard>
  );
}

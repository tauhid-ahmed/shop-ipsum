"use client";

import {
  AuthCard,
  AuthCardBody,
  AuthCardEmailVerifyFooter,
  AuthCardHeader,
  AuthCardNotify,
} from "./auth-card";
import { Button } from "@/components/ui/button";
import React, { useState, useTransition, useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
// import { Loader2 } from "@/components/loader";
import { tokenVerifyAction } from "../actions/email-verify.action";
// import { CircleCheck } from "lucide-react";
import { defaultRedirectPath } from "@/constants/paths";
import { NotifyType } from "../types";

export default function EmailVerificationForm() {
  const [otp, setOtp] = useState("");
  const [isPending, startTransition] = useTransition();
  const [verification, setVerification] = useState<{
    type: "success" | "error";
    message: string;
  }>();
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (otp.length !== 6) return; // Ensure valid OTP length before proceeding

    startTransition(async () => {
      const data = await tokenVerifyAction(otp);
      setVerification(data);
    });
  };

  useEffect(() => {
    if (verification?.type === "success") {
      const redirectDelay = 500;
      setTimeout(() => router.push(defaultRedirectPath()), redirectDelay);
    }
  }, [verification?.type, router]);

  return (
    <AuthCard>
      <AuthCardHeader title="Please verify your email" />
      <AuthCardBody>
        <form onSubmit={handleSubmit}>
          <div className="w-fit mx-auto space-y-4">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup className="[&>*]:size-12 [&>*]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="[&>*]:size-12 [&>*]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <AuthCardNotify notify={verification as NotifyType} />
            <Button
              disabled={otp.length !== 6 || isPending}
              type="submit"
              className="w-full flex items-center justify-center"
            >
              Verify
            </Button>
          </div>
        </form>
      </AuthCardBody>
      <AuthCardEmailVerifyFooter />
    </AuthCard>
  );
}

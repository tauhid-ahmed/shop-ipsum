"use client";

import {
  AuthCard,
  AuthCardBody,
  AuthCardEmailVerifyFooter,
  AuthCardHeader,
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
import { Loader2 } from "@/components/loader";
import { tokenVerifyAction } from "../actions/email-verify.action";
import { CircleCheck } from "lucide-react";
import { defaultRedirectPath } from "@/constants/paths";

export default function EmailVerificationForm() {
  const [otp, setOtp] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (otp.length !== 6) return; // Ensure valid OTP length before proceeding

    startTransition(async () => {
      const success = await tokenVerifyAction(otp);
      if (success) {
        setIsSuccess(true);
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const redirectDelay = 500;
      setTimeout(() => router.push(defaultRedirectPath()), redirectDelay);
    }
  }, [isSuccess, router]);

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

            <Button
              disabled={otp.length !== 6 || isPending}
              type="submit"
              className="w-full flex items-center justify-center"
            >
              {isSuccess ? (
                <>
                  Verified <CircleCheck className="ml-2 text-green-500" />
                </>
              ) : isPending ? (
                <>
                  Verifying... <Loader2 className="ml-2 animate-spin" />
                </>
              ) : (
                "Verify"
              )}
            </Button>
          </div>
        </form>
      </AuthCardBody>
      <AuthCardEmailVerifyFooter />
    </AuthCard>
  );
}

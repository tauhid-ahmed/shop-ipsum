"use client";
import { AuthCard, AuthCardNotify } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInAction } from "../actions/signin.action";
import * as paths from "@/constants/paths";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema, type SignInFormSchema } from "../schema";
import { useForm } from "react-hook-form";
import { NotifyType } from "../types";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function EmailVerificationForm() {
  return (
    <AuthCard
      title="Email Verification"
      message="Enter the code sent to"
      redirectName="Sign in"
      redirectHref={paths.signInPath()}
      socialForm={false}
    >
      <div className="w-fit mx-auto space-y-4">
        <InputOTP maxLength={6}>
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
        <Button className="w-full">Verify</Button>
      </div>
    </AuthCard>
  );
}

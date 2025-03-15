"use client";
import { AuthCard, AuthCardNotify } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInAction } from "../actions/signin.action";
import * as paths from "@/constants/paths";
import React from "react";
import { TextField } from "@/components/text-field";
import { CheckboxField } from "@/components/checkbox-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema, type SignInFormSchema } from "../schema";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { NotifyType } from "../types";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export default function EmailVerificationForm() {
  const [notify, setNotify] = React.useState<NotifyType | null>(null);
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  // const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    setNotify(null);
    const data = await signInAction(formData);
    setNotify(data?.notify as NotifyType);
  };
  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <h1 className="text-6xl">OTP VERIFICATION</h1>
    </AuthCard>
  );
}

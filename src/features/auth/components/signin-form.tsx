"use client";
import {
  AuthCard,
  AuthCardBody,
  AuthCardHeader,
  AuthCardNotify,
  AuthCardRedirectFooter,
} from "./auth-card";
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
import { SocialForm } from "./social-form";
import { useSearchParams } from "next/navigation";
import { VALIDATION_MESSAGES } from "../data";
import { useRouter } from "next/navigation";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export default function SignInForm() {
  const [notify, setNotify] = React.useState<NotifyType | null>(null);
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  const router = useRouter();
  // const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    const data = await signInAction(formData);
    setNotify(data?.notify as NotifyType);
  };
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (searchParams.get("error")) {
      setNotify({
        type: "error",
        message:
          VALIDATION_MESSAGES.ACCOUNT_VERIFICATION
            .ACCOUNT_EXISTS_WITH_DIFFERENT_PROVIDER,
      });
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (
      notify?.message === VALIDATION_MESSAGES.ACCOUNT_VERIFICATION.EMAIL_SENT
    ) {
      const timeoutId = setTimeout(() => {
        router.push(paths.verifyEmailPath());
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [notify]);

  return (
    <AuthCard>
      <AuthCardHeader title="Sign in to your account" />
      <AuthCardBody>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <fieldset>
              <TextField label="Email" name="email" />
              <TextField label="Password" name="password" type="password" />
              <div className="flex flex-col gap-6">
                <AuthCardNotify notify={notify} />
                <div className="flex items-center gap-3">
                  <RememberMe />
                  <ForgotPasswordRedirect />
                </div>
                <Button
                  className="w-full"
                  disabled={
                    !form.formState.isValid || form.formState.isSubmitting
                  }
                  type="submit"
                >
                  {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </fieldset>
          </form>
        </Form>
        <SocialForm />
      </AuthCardBody>
      <AuthCardRedirectFooter
        message="Don't have an account yet?"
        redirectName="Create an account"
        redirectHref={paths.registerPath()}
      />
      <div className="text-center p-2 text-sm font-medium text-white bg-rose-500 dark:bg-rose-800 rounded border border-border">
        Verification code is unavailable on the free tier. Use{" "}
        <strong className="underline">Google</strong> or{" "}
        <strong className="underline">GitHub</strong> to sign in.
      </div>
    </AuthCard>
  );
}

function RememberMe() {
  return (
    <Label className="flex gap-3 flex-row items-center cursor-pointer">
      <CheckboxField name="remember_me" />
      <span className="text-sm">Remember me</span>
    </Label>
  );
}

function ForgotPasswordRedirect() {
  return (
    <Link
      href={paths.forgotPasswordPath()}
      className="text-sm ml-auto text-blue-600 dark:text-blue-400 font-medium hover:underline underline-offset-2 focus:underline active:underline"
    >
      Forgot Password?
    </Link>
  );
}

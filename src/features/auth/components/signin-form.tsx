"use client";
import { CheckboxField } from "@/components/checkbox-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import * as paths from "@/constants/paths";
import { Notify } from "@/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { signInAction } from "../actions/signin.action";
import { signInFormSchema, type SignInFormSchema } from "../schema";
import {
  AuthCard,
  AuthCardContent,
  AuthCardHeader,
  AuthCardNotify,
  AuthCardRedirectFooter,
} from "./auth-card";
import { SocialForm } from "./social-form";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export default function SignInForm() {
  const [notify, setNotify] = React.useState<Notify | null>(null);
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  const router = useRouter();
  // const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    const data = await signInAction(formData);
    setNotify(data?.notify as Notify);
  };
  const searchParams = useSearchParams();

  return (
    <AuthCard>
      <AuthCardHeader title="Sign in to your account" />
      <AuthCardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <input
              type="hidden"
              name="callbackUrl"
              value={searchParams.get("callbackUrl") || "/hello"}
            />
            <fieldset>
              <TextField label="Email" name="email" />
              <TextField label="Password" name="password" type="password" />
              <div className="flex flex-col gap-6">
                <AuthCardNotify notify={notify?.notify as Notify} />
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
      </AuthCardContent>
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

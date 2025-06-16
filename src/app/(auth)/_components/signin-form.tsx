"use client";
import { CheckboxField } from "@/components/checkbox-field";
import { TextField } from "@/components";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import * as paths from "@/constants/paths";
import { Notify } from "@/app/(server)/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { signInAction } from "../../../actions/auth/signin.action";
import { signInFormSchema, type SignInFormSchema } from "@/lib/validation";
import { AuthCard, AuthCardNotification } from "./auth-card";
import { SubmitButton } from "./submit-button";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export function SignInForm() {
  const [notify, setNotify] = React.useState<Notify | null>(null);
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  const router = useRouter();
  const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    const data = await signInAction(formData);
    setNotify(data?.notify as Notify);
  };
  const searchParams = useSearchParams();

  return (
    <AuthCard
      title="Sign in to your account"
      redirectMessage="Don't have an account yet?"
      redirectLabel="Create an account"
      redirectHref={paths.registerPath()}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            <TextField label="Email" name="email" />
            <TextField label="Password" name="password" type="password" />
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <RememberMe />
                <ForgotPasswordRedirect />
              </div>
              <AuthCardNotification notify={notify as Notify} />

              <SubmitButton
                className="w-full"
                idleLabel="Sign in"
                submittingLabel="Signing you in..."
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                isSubmitting={form.formState.isSubmitting}
              />
            </div>
          </fieldset>
        </form>
      </Form>

      {/* <div className="text-center p-2 text-sm font-medium text-white bg-rose-500 dark:bg-rose-800 rounded border border-border">
        Verification code is unavailable on the free tier. Use{" "}
        <strong className="underline">Google</strong> or{" "}
        <strong className="underline">GitHub</strong> to sign in.
      </div> */}
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

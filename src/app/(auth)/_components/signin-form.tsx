"use client";
import { TextField } from "@/components";
import { Form } from "@/components/ui/form";
import * as paths from "@/constants/paths";
import { signInFormSchema, type SignInFormSchema } from "@/lib/validation";
import { type Notification } from "@/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { signInAction } from "../../../actions/auth/signin.action";
import { AuthCard } from "./auth-card";
import { AuthCheckboxField } from "./auth-checkbox-field";
import { AuthNotification } from "./auth-notification";
import { FormLink } from "./form-link";
import { SubmitButton } from "./submit-button";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export function SignInForm() {
  const [notification, setNotification] = React.useState<Notification | null>(
    null
  );
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  const router = useRouter();
  const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    const data = await signInAction(formData);
    setNotification(data.notification as Notification);
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
              <div className="flex items-center justify-between gap-2">
                <AuthCheckboxField name="remember_me" label="Remember me" />
                <FormLink href={paths.forgotPasswordPath()}>
                  Forgot Password?
                </FormLink>
              </div>
              <AuthNotification notification={notification as Notification} />
              <SubmitButton
                className="w-full"
                idleLabel="Sign in"
                submittingLabel="Signing you in..."
                disabled={
                  !rememberMe ||
                  !form.formState.isValid ||
                  form.formState.isSubmitting
                }
                isSubmitting={form.formState.isSubmitting}
              />
            </div>
          </fieldset>
        </form>
      </Form>

      <div className="text-center p-2 text-sm font-medium text-white bg-rose-500 dark:bg-rose-800 rounded border border-border">
        Verification code is unavailable on the free tier. Use{" "}
        <strong className="underline">Google</strong> or{" "}
        <strong className="underline">GitHub</strong> to sign in.
      </div>
    </AuthCard>
  );
}

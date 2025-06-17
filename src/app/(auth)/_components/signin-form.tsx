"use client";
import { signInAction } from "@/actions/auth/signin.action";
import { TextField } from "@/components";
import { Form } from "@/components/ui/form";
import * as paths from "@/constants/paths";
import { signInFormSchema, type SignInFormSchema } from "@/lib/validation";
import { type Notification } from "@/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { AuthCard } from "./auth-card";
import { AuthCheckboxField } from "./auth-checkbox-field";
import { AuthNotification } from "./auth-notification";
import { FormLink } from "./form-link";
import { SubmitButton } from "./submit-button";
import { PasswordField } from "./password-field";

export function SignInForm({ callbackUrl }: { callbackUrl: string }) {
  const [notification, setNotification] = React.useState<Notification | null>(
    null
  );
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
      callbackUrl: callbackUrl,
    },
  });
  const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    const data = await signInAction(formData);
    setNotification(data.notification as Notification);
  };

  return (
    <AuthCard
      title="Sign in to your account"
      redirectMessage="Don't have an account yet?"
      redirectLabel="Create an account"
      redirectHref={paths.registerPath()}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextField type="hidden" name="callbackUrl" />
          <fieldset className="space-y-6">
            <TextField label="Email" name="email" />
            <PasswordField label="Password" name="password" type="password" />
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
    </AuthCard>
  );
}

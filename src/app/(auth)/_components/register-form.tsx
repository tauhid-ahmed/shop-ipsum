"use client";
import { registerUserAction } from "@/actions/auth";
import { TextField } from "@/components";
import { Form } from "@/components/ui/form";
import * as paths from "@/constants/paths";
import { registerFormSchema, type RegisterFormSchema } from "@/lib/validation";
import { type Notification } from "@/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { AuthCard } from "./auth-card";
import { AuthNotification } from "./auth-notification";
import { SubmitButton } from "./submit-button";
import { AuthCheckboxField } from "./auth-checkbox-field";
import { PasswordField } from "./password-field";
import { LucideMail, LucideUser2 } from "lucide-react";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  terms_and_condition: false,
};

export default function RegisterForm() {
  const [notification, setNotification] = React.useState<Notification | null>();
  const form = useForm<RegisterFormSchema>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });
  const termsAndCondition = form.watch("terms_and_condition");
  const onSubmit = async (formData: RegisterFormSchema) => {
    setNotification(null);
    const data = await registerUserAction(formData);
    setNotification(data.notification as Notification);
  };

  return (
    <AuthCard
      title="Create an account"
      redirectMessage="Already have an account?"
      redirectLabel="Sign in"
      redirectHref={paths.signInPath()}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            <TextField label="Name" name="name">
              <LucideUser2 className="size-9 p-2.5 absolute right-0 bottom-0" />
            </TextField>
            <TextField label="Email" name="email">
              <LucideMail className="size-9 p-2.5 absolute right-0 bottom-0" />
            </TextField>
            <PasswordField label="Password" name="password" type="password" />
            <PasswordField
              label="Confirm Password"
              name="confirm_password"
              type="password"
            />
            <div className="flex flex-col gap-4">
              <AuthNotification notification={notification as Notification} />
              <AuthCheckboxField
                name="terms_and_condition"
                label={
                  <>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="underline text-primary hover:text-primary/80"
                    >
                      Terms & Conditions
                    </Link>
                  </>
                }
              />

              <SubmitButton
                idleLabel="Create an account"
                submittingLabel="Creating your account"
                disabled={
                  !termsAndCondition ||
                  form.formState.isSubmitting ||
                  !form.formState.isValid
                }
                isSubmitting={form.formState.isSubmitting}
                className="w-full"
              />
            </div>
          </fieldset>
        </form>
      </Form>
    </AuthCard>
  );
}

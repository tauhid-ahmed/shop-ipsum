"use client";
import { registerUserAction } from "@/actions/auth";
import { TextField } from "@/components";
import { Form } from "@/components/ui/form";
import * as paths from "@/constants/paths";
import { registerFormSchema, type RegisterFormSchema } from "@/lib/validation";
import { type Notification } from "@/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { AuthCard } from "./auth-card";
import { AuthNotification } from "./auth-notification";
import { SubmitButton } from "./submit-button";
import { AuthCheckboxField } from "./auth-checkbox-field";

const defaultValues = {
  name: "Tauhid",
  email: "tauhidxtauhid@gmail.com",
  password: "1234zxcvW@",
  confirm_password: "1234zxcvW@",
  terms_and_condition: true,
};

export default function RegisterForm() {
  const [notification, setNotification] = React.useState<Notification | null>();
  const form = useForm<RegisterFormSchema>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });
  const termsAndCondition = form.watch("terms_and_condition");
  const router = useRouter();
  const onSubmit = async (formData: RegisterFormSchema) => {
    setNotification(null);
    const data = await registerUserAction(formData);
    setNotification(data.notification as Notification);

    if (data?.redirectUrl) {
      return router.push(data.redirectUrl);
    }
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
            <TextField label="Name" name="name" />
            <TextField label="Email" name="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
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

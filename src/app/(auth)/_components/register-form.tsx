"use client";
import { CheckboxField } from "@/components/checkbox-field";
import { TextField } from "@/components";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import * as paths from "@/constants/paths";
import { type Notify } from "@/utils/api-responses";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { registerAction } from "../actions/register.action";
import {
  registerFormSchema,
  type RegisterFormSchema,
} from "./validators-schema";
import { AuthCard } from "./auth-card";
import SubmitButton from "./submit-button";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  terms_and_condition: false,
};

export default function RegisterForm() {
  const [notify, setNotify] = React.useState<Notify | null>();
  const form = useForm<RegisterFormSchema>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });
  const termsAndCondition = form.watch("terms_and_condition");
  const router = useRouter();
  const onSubmit = async (formData: RegisterFormSchema) => {
    setNotify(null);
    const data = await registerAction(formData);
    setNotify(data.notify as Notify);
    if (data?.notify?.type === "success") {
      sessionStorage.setItem("masked-email", formData.email);
      return router.push(`/auth/verify-email`);
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
              {/* Notification currently not working so to be fixed later on */}
              {/* <AuthCardNotification notify={notify as Notify} /> */}
              <div className="flex items-center text-sm gap-3 font-medium">
                <CheckboxField name="terms_and_condition" />
                <span className="hover:underline cursor-pointer hover:text-blue-500">
                  <Link href="#">I accept the terms and conditions.</Link>
                </span>
              </div>

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

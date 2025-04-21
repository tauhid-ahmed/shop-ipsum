import RegisterForm from "@/features/auth/components/register-form";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return <RegisterForm />;
}

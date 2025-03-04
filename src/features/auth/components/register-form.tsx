import { Input } from "@/components/ui/input";
import { AuthCard } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { signInAction } from "../actions/auth-action";
import * as paths from "@/paths";

export default function RegisterForm() {
  return (
    <AuthCard
      title="Create an account"
      message="Already have an account?"
      redirectName="Sign in"
      redirectHref={paths.loginPath()}
    >
      <form action={signInAction}>
        <fieldset className="space-y-6">
          <Label items="stack">
            Email Address: <Input name="email" />
          </Label>
          <Label>
            Password: <Input name="password" />
          </Label>
          <Label>
            Confirm Password: <Input name="confirm_password" />
          </Label>

          <Button className="w-full">Create an account</Button>
        </fieldset>
      </form>
    </AuthCard>
  );
}

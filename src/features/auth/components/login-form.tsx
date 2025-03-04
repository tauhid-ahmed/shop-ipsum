import { Input } from "@/components/ui/input";
import { AuthCard } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { signInAction } from "../actions/auth-action";
import * as paths from "@/paths";

export default function LoginForm() {
  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <form action={signInAction}>
        <fieldset className="space-y-6">
          <Label items="stack">
            Email Address: <Input name="email" />
          </Label>
          <Label>
            Password: <Input name="password" />
          </Label>
          <div className="flex gap-2 items-center text-sm">
            <Checkbox className="border-primary/60" /> Remember me
            <Link
              href="#"
              className="ml-auto text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button className="w-full">Sign in</Button>
        </fieldset>
      </form>
    </AuthCard>
  );
}

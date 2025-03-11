import { Heading } from "@/components/heading";
import { BrandLogoSmall } from "@/components/icons/brand-sm";
import { GithubLogo } from "@/components/icons/github";
import { GoogleLogo } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { NotifyType } from "../types";

type AuthCardProps = {
  title: string;
  children?: React.ReactNode;
  message?: string;
  redirectName: string;
  redirectHref: string;
};

export function AuthCard({
  title,
  children,
  message,
  redirectName,
  redirectHref,
}: AuthCardProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex justify-center">
          <BrandLogoSmall />
        </div>
        <Heading weight="bold" size="2xl">
          {title}
        </Heading>
      </div>
      <Card>
        <div className="py-10 p-8 space-y-6">
          <CardContent>{children}</CardContent>
          <CardContent>
            <div className="text-center text-sm flex items-center gap-3 before:flex-1 before:h-0.25 before:bg-primary/30 after:flex-1 after:h-0.25 after:bg-primary/30 font-medium">
              Or continue with
            </div>
          </CardContent>
          <CardFooter className="gap-4">
            <Button variant="outline" className="flex-1">
              <GoogleLogo />
              Google
            </Button>
            <Button variant="outline" className="flex-1">
              <GithubLogo />
              Github
            </Button>
          </CardFooter>
        </div>
      </Card>
      <div className="flex gap-2 justify-center text-center text-sm">
        {message && (
          <span className="text-muted-foreground font-medium">{message}</span>
        )}
        <Link
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
          href={redirectHref}
        >
          {redirectName}
        </Link>
      </div>
    </div>
  );
}

export function AuthCardNotify({ notify }: { notify: NotifyType | null }) {
  if (!notify) return null;
  return (
    <Alert variant={notify.type === "error" ? "destructive" : "success"}>
      <AlertCircle className="h-4 w-4 -mt-0.5" />
      <AlertDescription>{notify.message}</AlertDescription>
    </Alert>
  );
}

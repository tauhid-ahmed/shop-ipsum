import { Heading } from "@/components/heading";
import { BrandLogoSmall } from "@/components/icons/brand-sm";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { NotifyType } from "../types";

export function AuthCard({ children }: { children: React.ReactNode }) {
  return <div className="space-y-8">{children}</div>;
}

export function AuthCardHeader({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <BrandLogoSmall />
      <Heading weight="bold" size="2xl">
        {title}
      </Heading>
      {children}
    </div>
  );
}

export function AuthCardBody({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <div className="py-10 p-8">
        <CardContent className="space-y-6 [&_fieldset]:space-y-6">
          {children}
        </CardContent>
      </div>
    </Card>
  );
}

export function AuthCardRedirectFooter({
  message,
  redirectName,
  redirectHref,
}: {
  children?: React.ReactNode;
  message?: string;
  redirectName: string;
  redirectHref: string;
}) {
  return (
    <div className="flex gap-2 justify-center text-center text-sm">
      <span className="text-muted-foreground font-medium">{message}</span>
      <Link
        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
        href={redirectHref}
      >
        {redirectName}
      </Link>
    </div>
  );
}

export function AuthCardEmailVerifyFooter() {
  return (
    <div className="flex gap-2 justify-center text-center text-sm">
      <span className="text-muted-foreground font-medium">
        Verify your email address
      </span>
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

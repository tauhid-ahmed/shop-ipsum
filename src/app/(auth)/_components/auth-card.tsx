import { Heading, Logo } from "@/components";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { ApiResponse, Notify } from "@/utils/api-responses";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { SocialForm } from "./social-form";

type AuthCardProps = {
  title: string;
  redirectMessage: string;
  redirectLabel: string;
  redirectHref: string;
} & React.ComponentProps<"div">;

export function AuthCard({
  title,
  redirectMessage,
  redirectHref,
  redirectLabel,
  children,
}: AuthCardProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-1">
        <Logo />
        <Heading weight="bold" size="2xl">
          {title}
        </Heading>
      </div>
      <Card className="px-6! py-10!">
        <CardContent>
          <div className="space-y-4">
            {children}
            <SocialForm />
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-2 justify-center text-center text-sm">
        <span className="text-muted-foreground font-medium">
          {redirectMessage}
        </span>
        <Link
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
          href={redirectHref}
        >
          {redirectLabel}
        </Link>
      </div>
    </div>
  );
}

export function AuthCardNotification({ notify }: { notify: Notify }) {
  if (!notify.notify?.message) return null;
  return (
    <Alert variant={notify.notify.type === "error" ? "destructive" : "success"}>
      <AlertCircle className="h-4 w-4 -mt-0.5" />
      <AlertDescription>{notify.notify.message}</AlertDescription>
    </Alert>
  );
}

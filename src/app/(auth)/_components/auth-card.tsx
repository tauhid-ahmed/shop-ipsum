import { Heading, Logo } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { FormLink } from "./form-link";
import { SocialForm } from "./social-form";

type AuthCardProps = {
  title: string;
  subtitle?: string;
  redirectMessage?: string;
  redirectLabel?: string;
  redirectHref?: string;
  socialInfo?: boolean;
} & React.ComponentProps<"div">;

export function AuthCard({
  title,
  subtitle,
  redirectMessage,
  redirectHref,
  redirectLabel,
  socialInfo = true,
  children,
}: AuthCardProps) {
  return (
    <div className="space-y-6 py-6">
      <div className="flex flex-col items-center space-y-1">
        <Logo size="lg" />
        <Heading as="h1" weight="bold" size="2xl">
          {title}
        </Heading>
        {subtitle && (
          <Heading as="h2" size="md">
            {subtitle}
          </Heading>
        )}
      </div>
      <Card className="sm:px-6! sm:py-10!">
        <CardContent>
          <div className="space-y-4">
            {children}
            {socialInfo && <SocialForm />}
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-2 justify-center text-center text-sm">
        <span className="text-muted-foreground font-medium">
          {redirectMessage}
        </span>
        <FormLink href={redirectHref}>{redirectLabel}</FormLink>
      </div>
    </div>
  );
}

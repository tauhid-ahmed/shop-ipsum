import { Heading } from "@/components/heading";
import { BrandLogoSmall } from "@/components/icons/brand-sm";
import { GithubLogo } from "@/components/icons/github";
import { GoogleLogo } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

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
      <div className="relative before:absolute before:inset-0 before:bg-primary before:-z-10 before:blur-2xl before:opacity-10">
        <Card>
          <div className="py-8 p-6 space-y-8">
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
      </div>
      <div className="flex gap-2 justify-center text-center text-sm">
        
        {message && <span className="text-muted-foreground">{message}</span>}
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

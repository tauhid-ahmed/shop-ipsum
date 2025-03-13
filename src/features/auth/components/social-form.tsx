"use client";
import { GithubLogo } from "@/components/icons/github";
import { GoogleLogo } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/constants/paths";

export function SocialForm() {
  const handleSocialLogin = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: defaultRedirectPath() });
    console.log("sds");
  };
  return (
    <>
      <Button
        onClick={() => handleSocialLogin("google")}
        variant="outline"
        className="flex-1"
        type="button"
      >
        <GoogleLogo />
        Google
      </Button>
      <Button
        onClick={() => handleSocialLogin("github")}
        variant="outline"
        className="flex-1"
        type="button"
      >
        <GithubLogo />
        Github
      </Button>
    </>
  );
}

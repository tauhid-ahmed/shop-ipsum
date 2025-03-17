import { GithubLogo } from "@/components/icons/github";
import { GoogleLogo } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { socialAction } from "../actions/social.action";

export function SocialForm() {
  const [loading, setLoading] = useState(false);

  const handleSocialLogin = async (provider: "google" | "github") => {
    setLoading(true);
    try {
      await socialAction(provider);
    } catch (error) {
      console.error("Social login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center text-sm flex items-center gap-3 before:flex-1 before:h-0.25 after:flex-1 after:h-0.25 before:bg-accent-foreground/20 after:bg-accent-foreground/20 font-medium w-full pt-4">
        Or continue with
      </div>
      <div className="flex gap-2 w-full">
        <form
          className="flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleSocialLogin("google");
          }}
        >
          <Button
            variant={"outline"}
            className="w-full"
            type="submit"
            disabled={loading}
          >
            <GoogleLogo />
            {loading ? "Loading..." : "Google"}
          </Button>
        </form>
        <form
          className="flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleSocialLogin("github");
          }}
        >
          <Button
            variant={"outline"}
            className="w-full"
            type="submit"
            disabled={loading}
          >
            <GithubLogo />
            {loading ? "Loading..." : "GitHub"}
          </Button>
        </form>
      </div>
    </>
  );
}

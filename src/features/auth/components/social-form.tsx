import { GithubLogo } from "@/components/icons/github";
import { GoogleLogo } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { defaultRedirectPath } from "@/constants/paths";
import { startTransition } from "react";
import { socialAction } from "../actions/social.action";

export function SocialForm() {
  return (
    <>
      <div className="text-center text-sm flex items-center gap-3 before:flex-1 before:h-0.25 before:bg-primary/30 after:flex-1 after:h-0.25 after:bg-primary/30 font-medium w-full px-4">
        Or continue with
      </div>
      <div className="flex gap-2 w-full">
        <form
          className="flex-1"
          onSubmit={() => {
            startTransition(async () => {
              await socialAction("google");
            });
          }}
        >
          <Button variant={"outline"} className="w-full" type="submit">
            <GoogleLogo />
            Google
          </Button>
        </form>
        <form
          className="flex-1"
          onSubmit={() => {
            startTransition(async () => {
              await socialAction("github");
            });
          }}
        >
          <Button variant={"outline"} className="w-full" type="submit">
            <GithubLogo />
            GitHub
          </Button>
        </form>
      </div>
    </>
  );
}

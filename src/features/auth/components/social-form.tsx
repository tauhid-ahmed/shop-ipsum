import { GithubLogo } from "@/components/icons/github";
import { GoogleLogo } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { defaultRedirectPath } from "@/constants/paths";
import { startTransition } from "react";
import { socialAction } from "../actions/social.action";

export function SocialForm() {
  return (
    <>
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
    </>
  );
}

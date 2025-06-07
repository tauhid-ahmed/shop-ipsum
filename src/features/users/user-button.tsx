import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInPath } from "@/constants/paths";

export function UserButton() {
  return (
    <Button size="sm" asChild>
      <Link href={signInPath()}>Sign in</Link>
    </Button>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserButton() {
  return (
    <Button size="sm" asChild>
      <Link href="/auth/sign-in">Sign in</Link>
    </Button>
  );
}

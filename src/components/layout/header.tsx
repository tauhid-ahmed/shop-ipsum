import { ThemeSwitch } from "../theme";
import { Container } from "./container";
import Link from "next/link";
import { homePath } from "@/paths";
import { Button } from "../ui/button";
import * as paths from "@/paths";
import DesktopNav from "./desktop-nav";

export default function Header() {
  return (
    <header className="relative">
      <Container>
        <nav className="flex justify-between items-center py-2">
          <div className="">
            <Link
              href={homePath()}
              className="font-black tracking-wider text-xl underline"
            >
              BDSTORE
            </Link>
          </div>
          <DesktopNav />
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <LoginButton />
          </div>
        </nav>
      </Container>
    </header>
  );
}

function LoginButton() {
  return (
    <Button asChild>
      <Link href={paths.loginPath()}>Login</Link>
    </Button>
  );
}

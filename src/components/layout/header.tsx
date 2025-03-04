import { ThemeSwitch } from "../theme";
import { Container } from "./container";
import Link from "next/link";
import { homePath } from "@/paths";
import { Button } from "../ui/button";
import * as paths from "@/paths";
import DesktopNav from "./desktop-nav";
import { BrandLogoLarge } from "../icons/brand-large";

export default function Header() {
  return (
    <header className="relative">
      <Container>
        <nav className="flex justify-between items-center py-4">
          <div className="flex-1">
            <Link
              href={homePath()}
              className="font-black tracking-wider text-xl underline"
            >
              <BrandLogoLarge />
            </Link>
          </div>
          <DesktopNav />
          <div className="flex justify-end flex-1 items-center gap-4">
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

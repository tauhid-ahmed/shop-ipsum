import { Container } from "./container";
import Link from "next/link";
import { homePath } from "@/constants/paths";
import { Button } from "../ui/button";
import * as paths from "@/constants/paths";
import DesktopNav from "./desktop-nav";
import { BrandLogoLarge } from "../icons/brand-large";
import CartView from "@/features/cart/cart-widget";
import { BrandLogoSmall } from "../icons/brand-sm";
import { SearchOverview } from "@/features/products/search-overview";
import { Separator } from "../ui/separator";
import ProfileDialog from "@/features/users/profile-widget";

export default function Header() {
  return (
    <header className="border-b border-border bg-background/90 relative backdrop-blur">
      <Container size="fluid">
        <nav className="flex gap-4 justify-between items-center py-4">
          <div className="flex-1">
            <Link
              href={homePath()}
              className="font-black tracking-wider text-xl underline"
            >
              <BrandLogoLarge className="hidden md:block" />
              <BrandLogoSmall className="md:hidden" />
            </Link>
          </div>
          <div className="hidden md:block">
            <DesktopNav />
          </div>
          <div className="flex justify-end flex-1 items-center gap-3">
            <SearchOverview />
            <CartView />
            <LoginButton />
            <VerticalDivider />
            <ProfileDialog />
          </div>
        </nav>
      </Container>
    </header>
  );
}

function LoginButton() {
  return (
    <>
      <VerticalDivider />
      <Button variant="outline" shape="pill" asChild>
        <Link href={paths.loginPath()}>Sign in</Link>
      </Button>
    </>
  );
}

function VerticalDivider() {
  return (
    <span className="inline-block align-middle h-5">
      <Separator orientation="vertical" />
    </span>
  );
}

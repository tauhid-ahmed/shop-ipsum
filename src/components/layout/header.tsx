import { Container } from "./container";
import Link from "next/link";
import { homePath } from "@/constants/paths";
import DesktopNav from "./desktop-nav";
import { BrandLogoLarge } from "../icons/brand-large";
import CartView from "@/features/cart/cart-widget";
import { BrandLogoSmall } from "../icons/brand-sm";
import { SearchOverview } from "@/features/products/search-overview";
import { Separator } from "../ui/separator";
import ProfileDialog from "@/features/users/profile-widget";
import { LucideMenu } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-border bg-background/90 relative backdrop-blur">
      <Container size="fluid">
        <nav className="flex gap-6 justify-between items-center py-4">
          <div className="flex gap-1 items-center">
            <LucideMenu />
            <Link
              href={homePath()}
              className="font-black tracking-wider text-xl underline"
            >
              <BrandLogoLarge className="hidden md:block" />
              <BrandLogoSmall className="md:hidden" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <SearchOverview />
            <CartView />
            <VerticalDivider />
            <ProfileDialog />
          </div>
        </nav>
      </Container>
    </header>
  );
}

function VerticalDivider() {
  return (
    <span className="inline-block align-middle h-5">
      <Separator orientation="vertical" />
    </span>
  );
}

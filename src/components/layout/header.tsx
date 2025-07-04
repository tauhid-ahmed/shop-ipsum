import { Logo } from "@/components";
import { ProductSearchWidget } from "@/components/products";
import { UserProfileWidget } from "@/components/users/";
import WishlistOverview from "@/components/wishlist/wishlist-overview";
import { getServerSession } from "@/lib/get-server-session";
import { User } from "next-auth";
import { Container } from "./container";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { CartWidget } from "../cart/cart-widget";
import AnimateHeader from "./animate-header";

export default async function Header() {
  const session = await getServerSession();

  return (
    <AnimateHeader>
      <header className="border-b border-border bg-secondary/50 py-4 z-50 relative backdrop-blur-sm h-18 shadow">
        <Container size="lg">
          <nav className="flex items-center text-foreground/90">
            <div className="flex flex-1 gap-1 lg:hidden">
              <MobileNavigation />
              <ProductSearchWidget />
            </div>
            <div className="flex-1 lg:flex gap-4 hidden">
              <DesktopNavigation />
            </div>
            <Logo />
            <div className="flex-1 flex justify-end">
              <div className="flex gap-1 items-center">
                <div className="hidden lg:block">
                  <ProductSearchWidget />
                </div>
                <CartWidget />
                <WishlistOverview />
                <UserProfileWidget user={session as User} />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </AnimateHeader>
  );
}

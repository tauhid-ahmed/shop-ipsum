import { Container } from "./container";
import { SearchWidget } from "@/features/products/search-widget";
import ProfileWidget from "@/features/users/profile-widget";
import { CartWidget } from "@/features/cart/cart-widget";
import { Logo } from "../logo";
import Navigation from "./mobile-nav";
import { auth } from "@/auth";
import { DesktopNav } from "./desktop-nav";
import WishlistOverview from "@/features/wishlist/wishlist-overview";

export default async function Header() {
  const session = await auth();
  return (
    <header className="border-b border-border py-4 z-50 relative backdrop-blur bg-background/90 text-base -mx-3 lg:mx-0">
      <Container size="fluid">
        <nav className="flex items-center text-foreground/90">
          <div className="flex flex-1 gap-1 lg:hidden">
            <Navigation />
            <SearchWidget />
          </div>
          <div className="flex-1 lg:flex gap-4 hidden">
            <DesktopNav />
          </div>
          <Logo />
          <div className="flex-1 flex justify-end">
            <div className="flex gap-1 items-center">
              <div className="hidden lg:block">
                <SearchWidget />
              </div>
              <WishlistOverview />
              <ProfileWidget />
              {session?.user && <CartWidget />}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

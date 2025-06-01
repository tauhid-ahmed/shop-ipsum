import { Container } from "./container";
import { SearchWidget } from "@/features/products/search-widget";
import { CartWidget } from "@/features/cart/cart-widget";
import { Logo } from "@/components";
import Navigation from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import WishlistOverview from "@/features/wishlist/wishlist-overview";
import { getServerSession } from "@/lib/get-server-session";
import { UserWidget } from "@/features/users/user-widget";
import { UserButton } from "@/features/users/user-button";

export default async function Header() {
  const user = await getServerSession();

  return (
    <header className="border-b border-border py-4 z-50 relative backdrop-blur bg-background/90 text-base lg:mx-0">
      <Container>
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
              {!user ? (
                <UserButton />
              ) : (
                <UserWidget
                  user={{
                    name: user.name ?? "",
                    email: user.email ?? "",
                    image: user?.image ?? "",
                  }}
                />
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

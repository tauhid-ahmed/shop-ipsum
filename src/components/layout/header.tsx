import { Logo } from "@/components";
import { ProductSearchWidget } from "@/components/products";
import { UserProfileWidget } from "@/components/users/";
import WishlistOverview from "@/components/wishlist/wishlist-overview";
import { signInRoute } from "@/constants/paths";
import { getServerSession } from "@/lib/get-server-session";
import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./container";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export default async function Header() {
  const user = await getServerSession();

  return (
    <header className="border-b border-border bg-secondary/50 py-4 z-50 relative backdrop-blur text-base lg:mx-0 h-18 shadow">
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
              <WishlistOverview />
              {!user ? (
                <SignInButton />
              ) : (
                <UserProfileWidget
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

function SignInButton() {
  return (
    <Button asChild>
      <Link href={signInRoute()}>Sign In</Link>
    </Button>
  );
}

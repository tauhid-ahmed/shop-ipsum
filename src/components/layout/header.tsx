"use client";
import { Container } from "./container";
import { SearchWidget } from "@/features/products/search-widget";
import ProfileWidget from "@/features/users/profile-widget";
import { CartWidget } from "@/features/cart/cart-widget";

import { Logo } from "../logo";
import Navigation from "./navigation";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="border-b border-border py-4 z-50 relative backdrop-blur-2xl bg-background/90 text-sm">
      <Container size="fluid">
        <nav className="flex items-center">
          <div className="flex flex-1 lg:hidden">
            <Navigation />
            <SearchWidget />
          </div>
          <div className="flex-1 lg:flex gap-4 hidden text-secondary-foreground">
            <span>Women</span>
            <span>Men</span>
            <span>Children</span>
          </div>
          <Logo />
          <div className="flex-1 flex justify-end">
            <div className="flex gap-1 items-center">
              <div className="hidden lg:block">
                <SearchWidget />
              </div>
              <ProfileWidget />
              <CartWidget />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export function Menu() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Menu</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="">
            <Container>
              <div className="h-96 bg-red-500">ds</div>
            </Container>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

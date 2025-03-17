"use client";
import { Container } from "./container";
import { SearchWidget } from "@/features/products/search-widget";
import ProfileWidget from "@/features/users/profile-widget";
import { CartWidget } from "@/features/cart/cart-widget";

import { Logo } from "../logo";
import Navigation from "./navigation";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            id="maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            id="maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>;

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
            <div className="flex items-center">
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

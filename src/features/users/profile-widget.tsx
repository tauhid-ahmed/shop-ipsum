"use client";

import {
  LucideCircleUser,
  LucideHeart,
  LucideGift,
  LucideListOrdered,
  LucideShoppingBag,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { signInPath } from "@/constants/paths";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import SignedIn from "@/components/signed-in";
import SignedOut from "@/components/signed-out";
import ProfileImage from "@/components/profile-image";
import { signOut } from "next-auth/react";

const menuItems = [
  {
    name: "My Profile",
    icon: <LucideCircleUser />,
    href: "#",
  },
  {
    name: "Orders",
    icon: <LucideListOrdered />,
    href: "#",
  },
  {
    name: "Cart",
    icon: <LucideShoppingBag />,
    href: "#",
  },
  {
    name: "Wishlist",
    icon: <LucideHeart />,
    href: "#",
  },
  { name: "Gift cards", icon: <LucideGift />, href: "#" },
];

export default function ProfileWidget() {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setPopoverOpen(false);
  }, [pathname]);

  return (
    <Popover
      open={popoverOpen}
      defaultOpen={popoverOpen}
      onOpenChange={setPopoverOpen}
    >
      <SignedOut>
        <Button asChild>
          <Link href={signInPath()}>Sign In</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <PopoverTrigger className="cursor-pointer">
          <ProfileImage />
        </PopoverTrigger>
      </SignedIn>
      <SignedIn>
        <PopoverContent
          sideOffset={16}
          className="relative p-0 rounded text-muted-foreground"
        >
          <ProfileHeader />
          <div className="[&>*]:px-4 [&>*]:py-3 [&_svg]:size-5 text-sm font-medium divide-y divide-border">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                className="flex items-center gap-2 cursor-pointer hover:bg-accent"
                href={item.href}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <div className="flex justify-between bg-accent/40">
              <span>Appearance</span>
              <ThemeSwitch />
            </div>
          </div>
        </PopoverContent>
      </SignedIn>
    </Popover>
  );
}

function ProfileHeader() {
  const { user } = useAuth();
  return (
    <>
      <div className="flex flex-col gap-2 py-6 border-b border-border bg-accent/40">
        <ProfileImage align="center" size="lg" />
        <div className="text-center">
          <Heading
            as="h3"
            size="lg"
            weight="bold"
            className="text-secondary-foreground capitalize"
          >
            {user.name}
          </Heading>
          <p className="text-muted-foreground text-sm font-medium">
            {user.email}
          </p>
          <div className="flex gap-4 justify-center mt-2">
            <Button
              className="text-destructive-light"
              variant="secondary"
              size="sm"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

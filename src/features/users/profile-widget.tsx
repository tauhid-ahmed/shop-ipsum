"use client";

import {
  LucideHeart,
  LucideGift,
  LucideListOrdered,
  LucideShoppingBag,
  LucideUser,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import ProfileImage from "@/components/profile-image";
import { signOut } from "next-auth/react";
import * as paths from "@/constants/paths";

const menuItems = [
  {
    name: "My Profile",
    icon: <LucideUser />,
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
      <PopoverTrigger className="cursor-pointer">
        <ProfileImage />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={16}
        className="relative p-0 rounded text-muted-foreground"
      >
        <ProfileHeader />
        <div className="[&>*]:px-4 [&>*]:py-3 [&_svg]:size-5 text-sm font-medium divide-y divide-border bg-accent/20">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="flex items-center gap-2 cursor-pointer hover:bg-primary/10"
              href={item.href}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <div className="flex justify-between bg-accent/60">
            <span>Appearance</span>
            <ThemeSwitch />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ProfileHeader() {
  const { user } = useAuth();
  return (
    <>
      <div className="flex flex-col gap-2 py-6 border-b border-border bg-accent/60">
        <ProfileImage align="center" size="lg" border />
        <div className="text-center">
          <Heading
            as="h3"
            size="lg"
            weight="bold"
            className="text-secondary-foreground capitalize"
            align="center"
          >
            {user.name}
          </Heading>
          <p className="text-muted-foreground text-sm font-medium">
            {user.email}
          </p>
          <div className="flex gap-2 justify-center mt-2">
            {user.id && (
              <Button variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            )}
            {!user.id && (
              <>
                <Button asChild>
                  <Link href={paths.signInPath()}>Sign in</Link>
                </Button>
                <Button variant="outline">
                  <Link href={paths.registerPath()}> Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

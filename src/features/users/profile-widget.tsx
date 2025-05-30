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
import { cn } from "@/lib/utils";
import { setThemePreference } from "@/actions/theme-preference.action";
import { debounce } from "@/lib/debounce";

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
      <PopoverTrigger className="cursor-pointer" asChild>
        <Button size="sm">Login</Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={20}
        align="center"
        className="relative p-0 text-sm rounded text-muted-foreground"
      >
        <ProfileHeader />
        <div className="[&>*]:px-4 [&>*]:py-3 [&_svg]:size-4 text-sm font-medium divide-y divide-border bg-accent/20">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="flex items-center gap-2 cursor-pointer hover:bg-secondary/40"
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
          <ThemesMode />
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
              <Button size="sm" variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            )}
            {!user.id && (
              <>
                <Button size="sm" asChild>
                  <Link href={paths.signInPath()}>Sign in</Link>
                </Button>
                <Button size="sm" variant="outline">
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

function ThemesMode() {
  const colors = ["red", "yellow", "orange", "green", "rose", "violet", "blue"];
  const colorClasses = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    rose: "bg-rose-500",
    violet: "bg-violet-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="flex items-center justify-between gap-1">
      <span className="text-sm font-medium inline-block">Theme:</span>
      <div className="flex items-center gap-0.5">
        {colors.map((theme) => (
          <button
            onClick={debounce(setThemePreference.bind(null, theme), 500)}
            key={theme}
            className={cn(
              "size-6 border border-border rounded-full cursor-pointer hover:scale-110",
              `${colorClasses[theme as keyof typeof colorClasses]}`
            )}
          ></button>
        ))}
      </div>
    </div>
  );
}

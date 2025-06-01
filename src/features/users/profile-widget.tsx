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
import { Heading } from "@/components";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import ProfileImage from "@/components/profile-image";
import { signOut } from "next-auth/react";
import * as paths from "@/lib/constants/paths";
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
  const { user, isAuthenticated } = useAuth();
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setPopoverOpen(false);
  }, [pathname]);

  if (!user) return;

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
        <ProfileHeader
          name={user.name as string}
          email={user.email as string}
          image={user.image as string}
        />
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

function ProfileHeader({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-2 py-6 border-b border-border bg-accent/60 items-center">
        <ProfileImage name={name} image={image} />
        <Heading
          as="h3"
          size="lg"
          weight="bold"
          className="text-secondary-foreground capitalize"
          align="center"
        >
          {name}
        </Heading>
        <p className="text-muted-foreground text-sm font-medium">{email}</p>
        <Button size="sm" variant="destructive" onClick={() => signOut()}>
          Sign Out
        </Button>
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

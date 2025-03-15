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
import { registerPath, signInPath } from "@/constants/paths";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { type AuthUserType } from "@/features/auth/types";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import SignedIn from "@/components/signed-in";
import SignedOut from "@/components/signed-out";
import ProfileImage from "@/components/profile-image";

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

  const { user } = useAuth();
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
          <ProfileHeader user={user as AuthUserType} />
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

function ProfileHeader({ user }: { user: AuthUserType }) {
  const guestUser = Boolean(!user.id);
  const isUser = !guestUser;
  return (
    <>
      <div className="flex flex-col gap-2 py-6 border-b border-border bg-accent/40">
        <div className="size-10 mx-auto rounded-full border-2 border-primary overflow-hidden">
          <Image
            src={user.image as string}
            alt={user.name}
            width={40}
            height={40}
          />
        </div>
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
            {isUser && <RegisteredUser />}
            {guestUser && <GuestUser />}
          </div>
        </div>
      </div>
    </>
  );
}

function GuestUser() {
  return (
    <>
      <Button size="sm" asChild>
        <Link href={signInPath()}>Sign In</Link>
      </Button>
      <Button size="sm" variant="outline" asChild>
        <Link href={registerPath()}>Register</Link>
      </Button>
    </>
  );
}

function RegisteredUser() {
  const { signOut } = useAuth();
  return (
    <>
      <Button
        className="text-destructive-light"
        variant="secondary"
        size="sm"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </>
  );
}

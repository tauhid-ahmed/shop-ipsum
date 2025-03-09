"use client";
import {
  LucideCircleUser,
  LucideHeart,
  LucideGift,
  LucideListOrdered,
  LucideLogOut,
  LucideLogIn,
  LucideEllipsisVertical,
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

export default function ProfilePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="transparent" shape="pill">
          <LucideCircleUser />
          <LucideEllipsisVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={16}
        className="relative p-0 rounded text-muted-foreground"
      >
        <SignedInHeading title="John Doe" subtitle="Member since 2023" />
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
    </Popover>
  );
}

type ProfileHeadingProps = {
  title: string;
  subtitle: string;
  footer?: React.ReactNode;
};

function ProfileHeading({ title, subtitle, footer }: ProfileHeadingProps) {
  return (
    <div className="flex flex-col gap-2 py-6 border-b border-border bg-accent/40">
      <div className="flex flex-col items-center gap-1 text-center">
        <LucideCircleUser className="size-10" />
        <div className="">
          <Heading
            as="h3"
            size="lg"
            weight="bold"
            className="text-secondary-foreground"
          >
            {title}
          </Heading>
          <p className="text-sm">{subtitle}</p>
          <div className="mt-2">{footer}</div>
        </div>
      </div>
    </div>
  );
}

function SignedInHeading({
  title,
  subtitle,
}: Exclude<ProfileHeadingProps, "footer">) {
  return (
    <ProfileHeading
      title={title}
      subtitle={subtitle}
      footer={
        <Button variant="destructive" size="sm">
          <LucideLogOut className="size-4" />
          Sign Out
        </Button>
      }
    />
  );
}

function SignedOutHeading({
  title,
  subtitle,
}: Exclude<ProfileHeadingProps, "footer">) {
  return (
    <ProfileHeading
      title="New Member?"
      subtitle="Create an account"
      footer={
        <div className="flex justify-center gap-2">
          <Button variant="secondary" size="sm" asChild>
            <Link href={signInPath()}> Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={registerPath()}>Register</Link>
          </Button>
        </div>
      }
    />
  );
}

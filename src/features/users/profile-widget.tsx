"use client";
import {
  LucideCircleUser,
  LucideHeart,
  LucideGift,
  LucideListOrdered,
  LucideLogOut,
  LucideLogIn,
  LucideEllipsisVertical,
  LucideShoppingCart,
  LucideShoppingBasket,
  LucideShoppingBag,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { registerPath } from "@/constants/paths";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";

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
        <SignedInHeading />
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
  className?: string;
  redirectLink?: string;
  redirectName?: string;
  redirectClassName: string;
};

function ProfileHeading({
  title,
  subtitle,
  redirectName,
  redirectClassName,
}: ProfileHeadingProps) {
  return (
    <div className="flex flex-col gap-2 py-6 border-b border-border bg-accent/40">
      <div className="flex flex-col items-center gap-1">
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
        </div>
        <Button variant="link" className="text-destructive" size="sm">
          <LucideLogOut className="size-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

function SignedInHeading() {
  return (
    <ProfileHeading
      title="John Doe"
      subtitle="johndoe@gmail.com"
      redirectName="Sign out"
      // redirectIcon={<LucideLogOut />}
      redirectClassName="text-destructive"
    />
  );
}

function SignedOutHeading() {
  return (
    <ProfileHeading
      title="New customer?"
      subtitle="Please create an account"
      redirectName="Register"
      // redirectIcon={<LucideLogIn />}
      redirectClassName="text-primary"
    />
  );
}

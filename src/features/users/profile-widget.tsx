"use client";
import {
  LucideCircleUser,
  LucideHeart,
  LucideGift,
  LucideListOrdered,
  LucideLogOut,
  LucideLogIn,
  LucideEllipsisVertical,
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
    name: "Wishlist",
    icon: <LucideHeart />,
    href: "#",
  },
  { name: "Gift cards", icon: <LucideGift />, href: "#" },
];

export default function ProfilePopover() {
  return (
    <Popover>
      <PopoverTrigger className="flex py-1.5 cursor-pointer">
        <LucideCircleUser />
        <LucideEllipsisVertical />
      </PopoverTrigger>
      <PopoverContent className="relative mx-6 p-0 rounded text-muted-foreground">
        <span className="absolute inset-x-0 h-4 top-0 -translate-y-2" />
        <div className="divide-y divide-border [&>*]:px-4 [&>*]:py-3 [&_svg]:size-5 text-sm font-medium">
          <SignedOutHeading />
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
          <div className="flex justify-between">
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
    <div className="flex items-start justify-between gap-2">
      <div className="flex flex-col items-start justify-between max-w-44 break-words">
        <Heading
          as="h3"
          size="lg"
          weight="bold"
          align="left"
          className="text-accent-foreground"
        >
          {title}
        </Heading>
        <p className="text-sm">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <Link
          className={cn(
            "flex items-center font-medium gap-1 [&_svg]:!size-4 hover:underline underline-offset-2",
            redirectClassName
          )}
          href={""}
        >
          {redirectName}
        </Link>
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

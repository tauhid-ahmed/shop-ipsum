"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LucideCircleUser,
  LucideHeart,
  LucideGift,
  LucideListOrdered,
  LucideLogOut,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { registerPath } from "@/constants/paths";

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
  const [open, setOpen] = useState(true);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(true)}
        >
          <LucideCircleUser />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="relative mx-6 p-0 rounded text-muted-foreground"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(true)}
      >
        <span className="absolute inset-x-0 h-4 top-0 -translate-y-2" />
        <div className="divide-y divide-border [&>*]:px-4 [&>*]:py-3 [&_svg]:size-5 text-sm font-medium">
          <ProfileHeading />
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
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ProfileHeading({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const loggedIn = (
    <div className="flex items-center justify-between gap-2">
      <Heading as="h3" size="md" weight="bold">
        New customer?
      </Heading>
      <Button asChild variant="link">
        <Link href={registerPath()}>Register</Link>
      </Button>
    </div>
  );

  const notLoggedIn = (
    <div className="flex justify-between items-start">
      <div className="flex flex-col items-start justify-between">
        <Heading
          as="h3"
          size="md"
          weight="bold"
          className="text-accent-foreground"
        >
          John Doe
        </Heading>
        <p className="text-xs max-w-40 break-all">johndoe@gmail.com</p>
      </div>
      <Link
        className="text-sm text-destructive flex items-center gap-0.5 whitespace-nowrap shrink-0"
        href={registerPath()}
      >
        <LucideLogOut className="!size-4" />
        Sign out
      </Link>
    </div>
  );

  return isLoggedIn ? loggedIn : notLoggedIn;
}

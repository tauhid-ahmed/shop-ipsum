"use client";
import { Heading, ThemeSwitch } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signInRoute } from "@/constants/paths";
import { useAuth } from "@/hooks/useAuth";
import {
  LucideGift,
  LucideHeart,
  LucideListOrdered,
  LucideLogIn,
  LucideShoppingBag,
  LucideSwatchBook,
  LucideUser,
  LucideUser2,
} from "lucide-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UserProfilePicture } from ".";

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

export default function UserProfileWidget({ user }: { user: User }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setPopoverOpen(false);
  }, [pathname]);

  return (
    <Popover
      open={popoverOpen}
      defaultOpen={popoverOpen}
      onOpenChange={setPopoverOpen}
    >
      <PopoverTrigger className="cursor-pointer" asChild>
        <Button size="icon" variant="ghost">
          {user?.name && (
            <UserProfilePicture size="md" name={user.name} image={user.image} />
          )}
          {!user?.name && <LucideUser2 />}
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" sideOffset={20} align="center">
        <LoggedInProfileHeader />
        <GuestProfileHeader />
        <NavigationMenu />
      </PopoverContent>
    </Popover>
  );
}

function NavigationMenu() {
  return (
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
      <AppearanceChange />
      <SignOutButton />
    </div>
  );
}

function LoggedInProfileHeader() {
  const { user } = useAuth();
  if (!user) return;
  return (
    <div className="py-6 border-b border-border bg-accent/60 items-center">
      {user.name ? (
        <UserProfilePicture size="lg" name={user.name} image={user.image} />
      ) : (
        <LucideUser />
      )}
      <Heading
        as="h3"
        size="lg"
        weight="bold"
        className="text-secondary-foreground capitalize mt-4"
        align="center"
      >
        {user.name}
      </Heading>
      <p className="text-muted-foreground text-sm font-medium text-center">
        {user.email}
      </p>
    </div>
  );
}

function GuestProfileHeader() {
  const { user } = useAuth();
  if (user) return null;
  return (
    <div className="py-6 border-b border-border bg-accent/60 items-center">
      <LucideUser className="size-10 mx-auto text-foreground" />
      <Heading
        as="h3"
        size="lg"
        weight="bold"
        className="text-secondary-foreground capitalize mt-2"
        align="center"
      >
        Guest User
      </Heading>
      <div className="flex gap-2 justify-center mt-2">
        <Button size="sm" asChild>
          <Link href={signInRoute()}>
            <LucideLogIn /> Sign in
          </Link>
        </Button>
      </div>
    </div>
  );
}

function AppearanceChange() {
  return (
    <div className="flex justify-between">
      <span className="flex items-center gap-2 cursor-pointer hover:bg-secondary/40">
        <LucideSwatchBook /> Appearance
      </span>
      <ThemeSwitch />
    </div>
  );
}

function SignOutButton() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <div className="bg-accent/50">
      <Button onClick={() => signOut()} className="w-full" variant="outline">
        Sign out
      </Button>
    </div>
  );
}

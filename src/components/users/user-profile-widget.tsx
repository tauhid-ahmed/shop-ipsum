"use client";
import { Heading } from "@/components";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  LucideGift,
  LucideHeart,
  LucideListOrdered,
  LucideShoppingBag,
  LucideUser,
} from "lucide-react";
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

type ProfileWidgetProps = {
  user: {
    name: string;
    email: string;
    image?: string;
  };
};
export default function UserProfileWidget({ user }: ProfileWidgetProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
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
        <Button size="icon" variant="ghost">
          <UserProfilePicture size="md" name={user.name} image={user.image} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={20}
        align="center"
        className="relative p-0 text-sm rounded text-muted-foreground"
      >
        <ProfileHeader
          name={user.name}
          email={user.email}
          image={user.image ?? ""}
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
        <UserProfilePicture size="lg" name={name} image={image} />
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

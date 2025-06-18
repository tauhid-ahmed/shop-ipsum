"use client";
import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getStoreNavigationSectionByLabel,
  getStoreNavigationSectionLabels,
} from "@/data/store-navigation";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { LucideMenu, LucideX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export function MobileNavigation() {
  const [activeLabel, setActiveLabel] = useState("Men");
  const labels = useMemo(() => getStoreNavigationSectionLabels(), []);
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleActiveLabel = (label: string) => setActiveLabel(label);
  const handleSheetOpen = () => setSheetOpen(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <LucideMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-2 bg-popover">
        <SheetHeader className="py-5 space-y-4">
          <SheetClose asChild>
            <Button size="icon" variant="ghost">
              <LucideX />
            </Button>
          </SheetClose>
          <VisuallyHidden.Root>
            <SheetTitle>Mobile Navigation</SheetTitle>
          </VisuallyHidden.Root>
          <div className="border-b -mx-6 px-6">
            <ul className="flex text-center">
              {labels.map((label) => (
                <li
                  className={cn(
                    "flex-1 relative group after:absolute after:-bottom-px after:h-0.5 after:bg-primary after:inset-x-0 after:opacity-0",
                    {
                      "after:opacity-100": activeLabel === label,
                    }
                  )}
                  key={label}
                >
                  <Button
                    onClick={handleActiveLabel.bind(null, label)}
                    variant="ghost"
                    className={cn(
                      "hover:bg-transparent! py-6 text-primary/70 hover:text-primary",
                      {
                        "text-primary": activeLabel === label,
                      }
                    )}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </SheetHeader>
        <div className="flex-1 overflow-y-scroll px-6">
          <NavigationContent label={activeLabel} onClick={handleSheetOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavigationContent({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  const data = getStoreNavigationSectionByLabel(label);
  return (
    <div className="space-y-8">
      <div className="flex gap-2">
        {data?.featured.map((item) => (
          <div className="shrink-0 flex-1" key={item.name}>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image src={item.image} alt={item.name} />
            </div>
            <Heading className="mt-2" as="h3" size="md">
              {item.name}
            </Heading>
            <Button asChild variant="link" className="px-0">
              <Link onClick={onClick} className="text-sm" href={item.href}>
                Shop now
              </Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="pb-10 space-y-10">
        {data?.sections.map((section) => (
          <div className="space-y-4" key={section.name}>
            <Heading as="h3" weight="bold">
              {section.name}
            </Heading>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    onClick={onClick}
                    className="text-sm text-foreground/70 hover:text-foreground active:text-foreground"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

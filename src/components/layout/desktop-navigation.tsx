"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  getStoreNavigationSectionByLabel,
  getStoreNavigationSectionLabels,
} from "@/data/store-navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Heading from "../heading";
import { Container } from "./container";

export function DesktopNavigation() {
  const [activeLabel, setActiveLabel] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  const handlePointerEnter = (label: string) => {
    setShowPopover(true);
    setActiveLabel(label);
  };

  const handlePointerLeave = () => {
    setShowPopover(false);
    setActiveLabel("");
  };

  const onClick = () => {
    setShowPopover(false);
    setActiveLabel("");
  };

  return (
    <nav className="hidden lg:block" onPointerLeave={handlePointerLeave}>
      <ul className="flex gap-4">
        <Popover open={showPopover}>
          {getStoreNavigationSectionLabels().map((label) => (
            <PopoverTrigger
              key={label}
              onPointerEnter={handlePointerEnter.bind(null, label)}
              className={cn(
                "relative text-foreground/80 hover:text-foreground cursor-pointer after:h-0.5 after:inset-x-0 after:bg-primary after:absolute after:-bottom-6 after:opacity-0 hover:after:opacity-100 before:absolute before:-inset-x-4 before:-inset-y-6 after:translate-y-0.5 hover:after:translate-y-0 transition-[opacity_transform] after:duration-500",
                label === activeLabel && "after:opacity-100 after:translate-y-0"
              )}
            >
              {label}
            </PopoverTrigger>
          ))}
          {showPopover && (
            <PopoverContent
              onPointerLeave={handlePointerLeave}
              className="w-screen mt-5"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  easings: "linear",
                  duration: 0.3,
                }}
              >
                <NavigationContent label={activeLabel} onClick={onClick} />
              </motion.div>
            </PopoverContent>
          )}
        </Popover>
      </ul>
    </nav>
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
    <Container>
      <div className="flex items-start gap-8 py-12">
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8">
          {data?.featured.map((item, index) => (
            <div
              className={cn(
                "h-60 rounded-xl overflow-hidden relative",
                index === 0 ? "col-span-2" : "col-span-1"
              )}
              key={item.name}
            >
              <Image
                className="size-full object-cover"
                src={item.image}
                alt={item.name}
              />
              <span className="absolute bottom-0 inset-x-0 rounded backdrop-blur block shadow-2xl drop-shadow-2xl bg-gradient-to-br from-primary/40 to-transparent py-4 px-8 text-background space-y-2">
                <Heading as="h3" size="default" className="text-background">
                  {item.name}
                </Heading>
                <Link
                  onClick={onClick}
                  className="text-sm hover:underline"
                  href={item.href}
                >
                  Shop now
                </Link>
              </span>
            </div>
          ))}
        </div>
        <div className="flex-1 grid gap-8 grid-cols-3">
          {data?.sections.map((section) => (
            <section key={section.name} className="space-y-4">
              <Heading size="default" as="h3" weight="bold">
                {section.name}
              </Heading>
              <ul className="text-foreground/80 space-y-2">
                {section.items.map((item) => (
                  <li onClick={onClick} key={item.name}>
                    <Link
                      className="hover:underline hover:text-primary"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}

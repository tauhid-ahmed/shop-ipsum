"use client";
import { LucideListMinus, LucidePanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useRootClick } from "@/hooks/useRootClick";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav-data";
import { ActiveRoute } from "./active-route";

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useRootClick(() => {
    setOpen(false);
    setSubMenuOpen(false);
  }, ref);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(!open);
          setSubMenuOpen(false);
        }}
        variant="ghost"
        shape="pill"
        size="icon"
      >
        <LucideListMinus />
      </Button>
      <AnimatePresence mode="wait">
        {open && (
          <div
            ref={ref}
            className={cn(
              "fixed left-0 top-16 w-72 h-[calc(100vh-4rem)] [&>*]:p-6",
              open && "pointer-events-auto",
              !open && "pointer-events-none"
            )}
          >
            <MotionConfig
              transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
            >
              <motion.div
                key={open ? "open" : "closed"}
                initial={{ x: "-100%" }}
                animate={{ x: open ? 0 : "-100%" }}
                exit={{ x: "-100%" }}
                className="absolute inset-0 bg-popover text-popover-foreground shadow-lg border-r border-border"
              >
                <ul className="space-y-2 ml-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <ActiveRoute href={item.href}>{item.name}</ActiveRoute>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: subMenuOpen ? 0 : "-100%" }}
                exit={{ x: "-100%" }}
                className="absolute inset-0 bg-popover text-popover-foreground  border border-border shadow-lg"
              >
                <div className="-mt-4 -ml-2 pb-1 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    shape="pill"
                    onClick={() => setSubMenuOpen(false)}
                  >
                    <LucidePanelLeftClose />
                    <strong>Main Menu</strong>
                  </Button>
                </div>
                <div className="mt-4">
                  <span>Top Picks</span>
                </div>
              </motion.div>
            </MotionConfig>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

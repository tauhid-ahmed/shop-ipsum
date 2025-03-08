"use client";
import { LucideMenu } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
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
        <LucideMenu />
      </Button>
      <AnimatePresence mode="wait">
        {open && (
          <div className="fixed left-0 top-16 w-72 h-[calc(100vh-4rem)] border border-border [&>*]:px-6">
            <MotionConfig transition={{ duration: 0.2, type: "tween" }}>
              <motion.div
                key={open ? "open" : "closed"}
                initial={{ x: "-100%" }}
                animate={{ x: open ? 0 : "-100%" }}
                exit={{ x: "-100%" }}
                className="absolute inset-0 bg-rose-500 z"
              >
                <p onClick={() => setSubMenuOpen(true)}>Men</p>
                <p onClick={() => setSubMenuOpen(true)}>Women</p>
                <p onClick={() => setSubMenuOpen(true)}>Children</p>
              </motion.div>
              <motion.div
                initial={{ x: "-100%" }}
                exit={{ x: "-100%" }}
                animate={{ x: subMenuOpen ? "0%" : "-100%" }}
                className="absolute inset-0 bg-emerald-500"
              >
                <span onClick={() => setSubMenuOpen(false)}>close</span>
              </motion.div>
            </MotionConfig>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

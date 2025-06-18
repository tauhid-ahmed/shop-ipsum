"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

const MAX_SCROLL_AMOUNT = 100;

const variants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export default function AnimateHeader({ children }: React.PropsWithChildren) {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const prevScrollPosition = useRef<number>(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsHidden(y - prevScrollPosition.current >= MAX_SCROLL_AMOUNT);
  });

  return (
    <motion.div
      variants={{ ...variants }}
      initial="initial"
      animate="animate"
      key={isHidden ? "hide" : "show"}
      transition={{
        duration: 0.15,
        easings: "linear",
      }}
      className={cn("top-0 z-50", isHidden && "sticky")}
    >
      {children}
    </motion.div>
  );
}

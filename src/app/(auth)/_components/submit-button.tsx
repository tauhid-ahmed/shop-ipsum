"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { LucideLoader } from "lucide-react";

type Props = {
  disabled: boolean;
  isSubmitting: boolean;
  idleLabel: string;
  submittingLabel: string;
} & React.ComponentProps<"button">;

const transitionVariants = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
};

export default function SubmitButton({
  disabled,
  isSubmitting,
  idleLabel,
  submittingLabel,
  className,
  ...rest
}: Props) {
  return (
    <Button disabled={disabled} type="submit" className={className} {...rest}>
      <AnimatePresence mode="popLayout" initial={false}>
        {isSubmitting ? (
          <motion.span
            key="submitting"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="inline-flex gap-1 items-center"
          >
            <LucideLoader className="animate-spin" />
            {submittingLabel}
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="inline-block"
          >
            {idleLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

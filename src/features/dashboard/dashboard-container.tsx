"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { DashboardNavigation } from "./navigation";

type Props = {
  children: React.ReactNode;
};

export function DashboardContainer({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <motion.div className="grid grid-cols-[auto_1fr]">
        <DashboardNavigation
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
        {children}
      </motion.div>
    </>
  );
}

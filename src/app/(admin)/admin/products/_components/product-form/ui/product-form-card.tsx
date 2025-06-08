"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideChevronDown } from "lucide-react";
import { cloneElement, ReactElement, useState } from "react";
import ActionButton from "../action-button";
import { motion } from "motion/react";

type ProductFormCard = {
  title: string;
  description: string;
  icon: ReactElement<{ className?: string }>;
  isExpanded?: boolean;
} & React.ComponentProps<"div">;

export function ProductFormCard({
  title,
  description,
  icon,
  children,
  isExpanded = false,
}: ProductFormCard) {
  const [isCardCollapsed, setIsCardCollapsed] = useState(isExpanded);
  const handleCardCollapsed = () => setIsCardCollapsed(!isCardCollapsed);
  console.log({ isCardCollapsed });
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card className="shadow-2xl">
        <CardHeader
          onClick={handleCardCollapsed}
          className="relative px-20! group"
        >
          <span className="rounded-xl absolute left-6 top-1 bg-accent size-10">
            {cloneElement(icon, {
              className: "size-full p-2 " + icon.props.className,
            })}
          </span>
          <CardTitle className="text-xl leading-tight">{title}</CardTitle>
          <CardDescription className="text-sm leading-tight">
            {description}
          </CardDescription>
          <ActionButton
            size="icon"
            variant="ghost"
            className="absolute top-0 right-4 cursor-pointer group-hover:bg-accent"
          >
            <LucideChevronDown
              className={cn(
                "transition-transform",
                isCardCollapsed ? "rotate-0" : "rotate-180"
              )}
            />
          </ActionButton>
        </CardHeader>
        {isCardCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CardContent>{children}</CardContent>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}

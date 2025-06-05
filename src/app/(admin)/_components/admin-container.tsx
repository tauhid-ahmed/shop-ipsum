"use client";
import { useSidebar } from "./sidebar-provider";
import { cn } from "@/lib/utils";

export default function AdminContainer({ children }: React.PropsWithChildren) {
  const { isCollapsedSidebar } = useSidebar();
  return (
    <div
      className={cn(
        "grid grid-cols-[4.5rem_1fr] transition-[grid] duration-300",
        !isCollapsedSidebar && "grid-cols-[16.25rem_1fr]",
        isCollapsedSidebar && "pl-[4.5rem]"
      )}
    >
      {children}
    </div>
  );
}

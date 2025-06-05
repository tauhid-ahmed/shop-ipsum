"use client";
import { useSidebar } from "./sidebar-provider";
import { cn } from "@/lib/utils";

export default function AdminContainer({ children }: React.PropsWithChildren) {
  const { isOpen, onPointerEnter, onPointerLeave, toggleCollapsed } =
    useSidebar();
  return (
    <div
      className={cn(
        "grid grid-cols-[80px_1fr] transition-all",
        isOpen && "grid-cols-[400px_1fr]"
      )}
    >
      {children}
    </div>
  );
}

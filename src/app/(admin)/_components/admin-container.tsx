"use client";
import { useSidebar } from "./sidebar-provider";
import { cn } from "@/lib/utils";

export default function AdminContainer({ children }: React.PropsWithChildren) {
  const { isCollapsedSidebar } = useSidebar();
  return (
    <div
      style={
        {
          "--_sidebar-spacing": "1rem",
          "--_sidebar-collapsed": "4rem",
          "--_sidebar-expanded": "16.25rem",
          "--_sidebar-icon-container": "2rem",
          "--_sidebar-icon-sm": "1rem",
          "--_sidebar-icon-lg": "1.5rem",
          "--_sidebar-header-height": "4.5rem",
          "--_sidebar-footer-height": "4.5rem",
        } as React.CSSProperties
      }
      className={cn(
        "grid grid-cols-[var(--_sidebar-collapsed)_1fr] transition-[grid] duration-300",
        !isCollapsedSidebar && "grid-cols-[var(--_sidebar-expanded)_1fr]",
        isCollapsedSidebar && "pl-[var(--_sidebar-collapsed)] grid-cols-[1fr]"
      )}
    >
      {children}
    </div>
  );
}

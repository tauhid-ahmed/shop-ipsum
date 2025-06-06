"use client";
import { SidebarToggleButton } from "./admin-sidebar";

export default function Header() {
  return (
    <div className="px-[var(--_sidebar-spacing)] py-[var(--_sidebar-spacing)] sticky top-0 flex items-center gap-[var(--_sidebar-spacing)] w-full bg-popover border-b border-border h-[var(--_sidebar-header-height)]">
      <SidebarToggleButton /> <div className="h-6 w-px bg-secondary"></div>
    </div>
  );
}

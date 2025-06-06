"use client";
import { SidebarToggleButton } from "./admin-sidebar";

export default function Header() {
  return (
    <div className="-mx-[var(--_sidebar-spacing)] px-[var(--_sidebar-spacing)] py-[var(--_sidebar-spacing)] sticky top-0 flex items-center gap-[var(--_sidebar-spacing)] bg-popover border-b border-border h-[var(--_sidebar-header-height)]">
      <SidebarToggleButton /> <Separator />
    </div>
  );
}

function Separator() {
  return <div className="h-6 w-px bg-secondary"></div>;
}

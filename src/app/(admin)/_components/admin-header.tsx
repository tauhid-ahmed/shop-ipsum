"use client";
import { Button } from "@/components/ui/button";
import { LucidePanelLeftDashed, LucidePanelRightDashed } from "lucide-react";
import { useSidebar } from "./sidebar-provider";

export default function Header() {
  return (
    <div className="px-[var(--_sidebar-spacing)] sticky top-0 flex items-center gap-[var(--_sidebar-spacing)] w-full bg-popover border-b border-border h-[var(--_sidebar-header-height)]">
      <SidebarActionButton /> <div className="h-6 w-px bg-secondary"></div>
    </div>
  );
}

function SidebarActionButton() {
  const { isExpanded, toggleSidebarCollapse } = useSidebar();
  return (
    <Button
      variant="transparent"
      className="p-0! hover:text-primary-foreground [&>svg]:size-6! leading-0 h-6! text-muted-foreground"
      onClick={toggleSidebarCollapse}
    >
      {isExpanded ? <LucidePanelLeftDashed /> : <LucidePanelRightDashed />}
    </Button>
  );
}

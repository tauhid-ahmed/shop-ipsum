"use client";
import { Button } from "@/components/ui/button";
import { LucidePanelRightOpen, LucidePanelRightClose } from "lucide-react";
import { useSidebar } from "./sidebar-provider";

export default function Header() {
  return (
    <div className="py-4 flex items-center gap-6">
      <SidebarActionButton /> <div className="h-6 w-px bg-secondary"></div>
    </div>
  );
}

function SidebarActionButton() {
  const { isExpanded, toggleSidebarCollapse } = useSidebar();
  return (
    <Button
      variant="transparent"
      className="p-0! hover:text-primary [&>svg]:size-6! leading-0 h-6!"
      onClick={toggleSidebarCollapse}
    >
      {isExpanded ? <LucidePanelRightOpen /> : <LucidePanelRightClose />}
    </Button>
  );
}

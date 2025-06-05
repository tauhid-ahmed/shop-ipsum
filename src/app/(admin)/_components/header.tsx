"use client";
import { Button } from "@/components/ui/button";
import { LucidePanelRightOpen, LucidePanelRightClose } from "lucide-react";
import { useSidebar } from "./sidebar-provider";

export default function Header() {
  const { isExpanded, toggleSidebarCollapse } = useSidebar();
  return (
    <div>
      <Button onClick={toggleSidebarCollapse}>
        {isExpanded ? <LucidePanelRightOpen /> : <LucidePanelRightClose />}
      </Button>
      Header
    </div>
  );
}

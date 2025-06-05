"use client";
import { Button } from "@/components/ui/button";
import { LucidePanelRightOpen, LucidePanelRightClose } from "lucide-react";
import { useSidebar } from "./sidebar-provider";

export default function Header() {
  const { isOpen, toggleCollapsed } = useSidebar();
  return (
    <div>
      <Button onClick={toggleCollapsed}>
        {isOpen ? <LucidePanelRightOpen /> : <LucidePanelRightClose />}
      </Button>
      Header
    </div>
  );
}

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ActiveSectionData = {
  value: string;
  type: "accordion" | "link" | "";
};

type SidebarContextType = {
  isExpanded: boolean;
  toggleSidebarCollapse: () => void;
  handlePointerEnter: () => void;
  handlePointerLeave: () => void;
  activeSection: string;
  handleActiveSection: (incomingItemData: ActiveSectionData) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleSidebarCollapse = () => setIsCollapsedSidebar((prev) => !prev);

  const handlePointerEnter = () => setIsMouseHovering(true);

  const handlePointerLeave = () => setIsMouseHovering(false);

  const handleActiveSection = (incomingItemData: ActiveSectionData) => {
    if (incomingItemData.type === "accordion") {
      setActiveSection((prevActiveItem) =>
        prevActiveItem === incomingItemData.value ? "" : incomingItemData.value
      );
    } else {
      setActiveSection(incomingItemData.value);
    }
  };

  const isExpanded = !isCollapsedSidebar || isMouseHovering;

  const contextValue: SidebarContextType = {
    isExpanded,
    toggleSidebarCollapse,
    handlePointerEnter,
    handlePointerLeave,
    handleActiveSection,
    activeSection,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

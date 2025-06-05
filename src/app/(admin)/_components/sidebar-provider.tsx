"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ActiveNavItemData = {
  value: string;
  type: "accordion" | "link" | "";
};

type SidebarContextType = {
  isExpanded: boolean;
  toggleSidebarCollapse: () => void;
  handlePointerEnter: () => void;
  handlePointerLeave: () => void;
  activeNavItem: ActiveNavItemData;
  setActiveNavItem: (itemData: ActiveNavItemData) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [currentActiveSection, setCurrentActiveSection] =
    useState<ActiveNavItemData>({
      value: "",
      type: "",
    });

  const toggleSidebarCollapse = () => setIsCollapsedSidebar((prev) => !prev);

  const handlePointerEnter = () => setIsMouseHovering(true);

  const handlePointerLeave = () => setIsMouseHovering(false);

  const setActiveNavItem = (incomingItemData: ActiveNavItemData) => {
    if (incomingItemData.type === "accordion") {
      setCurrentActiveSection((prevActiveItem) =>
        prevActiveItem.value === incomingItemData.value
          ? { value: "", type: "" }
          : incomingItemData
      );
    } else {
      setCurrentActiveSection(incomingItemData);
    }
  };

  const isExpanded = !isCollapsedSidebar || isMouseHovering;

  const contextValue: SidebarContextType = {
    isExpanded,
    toggleSidebarCollapse,
    handlePointerEnter,
    handlePointerLeave,
    activeNavItem: currentActiveSection,
    setActiveNavItem,
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

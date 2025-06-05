"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleCollapsed: () => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);
  const onPointerEnter = () => setIsHovered(true);
  const onPointerLeave = () => setIsHovered(false);
  const isOpen = !isCollapsed || isHovered;

  const value = { isOpen, toggleCollapsed, onPointerEnter, onPointerLeave };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

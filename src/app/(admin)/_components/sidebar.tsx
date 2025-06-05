"use client";
import { useSidebar } from "./sidebar-provider";

export default function Sidebar() {
  const { isOpen, onPointerEnter, onPointerLeave, toggleCollapsed } =
    useSidebar();
  return (
    <nav
      className="h-screen border overflow-y-scroll"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    ></nav>
  );
}

"use client";
import { useSidebar } from "./sidebar-provider";

export default function Sidebar() {
  const { isOpen, onPointerEnter, onPointerLeave, toggleCollapsed } =
    useSidebar();
  return (
    <div
      className="h-screen border"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      Sidebar
    </div>
  );
}

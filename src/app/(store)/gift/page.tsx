// app/(admin)/layout.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Box, User } from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: <Home size={20} />,
    href: "/admin/dashboard", // 🔥 শুধু লিঙ্ক
  },
  {
    title: "Products",
    icon: <Box size={20} />,
    subMenu: [
      { title: "All Products", href: "/admin/products" },
      { title: "Create Product", href: "/admin/products/create" },
    ],
  },
  {
    title: "Users",
    icon: <User size={20} />,
    subMenu: [
      { title: "User List", href: "/admin/users" },
      { title: "Admin Roles", href: "/admin/roles" },
    ],
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const isSidebarOpen = !isCollapsed || isHovered;
  const sidebarWidth = isSidebarOpen ? "240px" : "80px";

  const toggleMenu = (title: string) => {
    if (isSidebarOpen) {
      setOpenMenus((prev) =>
        prev.includes(title)
          ? prev.filter((t) => t !== title)
          : [...prev, title]
      );
    }
  };

  return (
    <div className="flex">
      <aside
        className="h-screen bg-gray-900 text-white transition-all duration-300 overflow-hidden"
        style={{ width: sidebarWidth }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && <span className="text-lg font-bold">Admin</span>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sm p-1 bg-gray-800 rounded"
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>

        <nav className="mt-4 space-y-2">
          {menu.map(({ title, icon, subMenu }) => (
            <div key={title}>
              <button
                onClick={() => toggleMenu(title)}
                className="flex items-center w-full p-2 hover:bg-gray-800 gap-2"
              >
                <span>{icon}</span>
                {isSidebarOpen && (
                  <span className="text-sm font-medium">{title}</span>
                )}
              </button>

              {isSidebarOpen && openMenus.includes(title) && (
                <div className="pl-8 mt-1 space-y-1">
                  {subMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 min-h-screen p-6">{children}</main>
    </div>
  );
}

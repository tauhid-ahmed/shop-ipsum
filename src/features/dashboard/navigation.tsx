"use client";

import { cloneElement, useEffect, useState } from "react";
import {
  LucideHome,
  LucideBox,
  LucideLayoutList,
  LucideUsers,
  LucideSettings,
  LucideTruck,
  LucidePackageCheck,
  LucideTags,
  LucideShoppingCart,
  LucideWarehouse,
  LucideChevronRight,
  LucideChevronsRight,
} from "lucide-react";
import Link from "next/link";
import { HeightAnimation } from "./animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  icon: React.ReactElement;
  href: string;
  subnav?: NavItem[];
};

export const paths = {
  dashboard: {
    home: "/dashboard",
    products: {
      all: "/dashboard/products",
      new: "/dashboard/products/new",
      inventory: "/dashboard/products/inventory",
      variants: "/dashboard/products/variants",
    },
    categories: "/dashboard/categories",
    orders: "/dashboard/orders",
    users: "/dashboard/users",
    shipping: "/dashboard/shipping",
    returns: "/dashboard/returns",
    tags: "/dashboard/tags",
    warehouse: "/dashboard/warehouse",
    settings: "/dashboard/settings",
  },
};

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    icon: <LucideHome />,
    href: paths.dashboard.home,
  },
  {
    name: "Products",
    icon: <LucideBox />,
    href: paths.dashboard.products.all,
    subnav: [
      {
        name: "All Products",
        href: paths.dashboard.products.all,
        icon: <LucideBox />,
      },
      {
        name: "Add Product",
        href: paths.dashboard.products.new,
        icon: <LucideBox />,
      },
      {
        name: "Inventory",
        href: paths.dashboard.products.inventory,
        icon: <LucideBox />,
      },
      {
        name: "Variants",
        href: paths.dashboard.products.variants,
        icon: <LucideBox />,
      },
    ],
  },
  {
    name: "Categories",
    icon: <LucideLayoutList />,
    href: paths.dashboard.categories,
  },
  {
    name: "Orders",
    icon: <LucideShoppingCart />,
    href: paths.dashboard.orders,
  },
  {
    name: "Users",
    icon: <LucideUsers />,
    href: paths.dashboard.users,
  },
  {
    name: "Shipping",
    icon: <LucideTruck />,
    href: paths.dashboard.shipping,
  },
  {
    name: "Return Policies",
    icon: <LucidePackageCheck />,
    href: paths.dashboard.returns,
  },
  {
    name: "Tags",
    icon: <LucideTags />,
    href: paths.dashboard.tags,
  },
  {
    name: "Warehouse",
    icon: <LucideWarehouse />,
    href: paths.dashboard.warehouse,
  },
  {
    name: "Settings",
    icon: <LucideSettings />,
    href: paths.dashboard.settings,
  },
];

export function DashboardNavigation({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <motion.nav
      initial={false}
      animate={{
        width: expanded ? "240px" : "90px",
      }}
      className="whitespace-nowrap p-8 border-r border-input overflow-hidden relative"
    >
      <Button
        size="icon"
        variant="transparent"
        onClick={onClick}
        className={cn(
          "absolute top-0 right-0 cursor-pointer",
          expanded ? "rotate-180" : "rotate-0"
        )}
      >
        <LucideChevronsRight />
      </Button>
      <Nav expanded={expanded} data={navItems} />
    </motion.nav>
  );
}

function Nav({ data, expanded }: { data: NavItem[]; expanded: boolean }) {
  const [openNav, setOpenNav] = useState("");
  const pathname = usePathname();

  return (
    <ul className="space-y-6">
      {data.map((item) => (
        <li className="flex items-center gap-8" key={item.name}>
          {item.subnav ? (
            <div className="flex flex-col">
              <div
                onClick={() =>
                  setOpenNav(openNav === item.name ? "" : item.name)
                }
                className="flex gap-6 items-center cursor-pointer"
              >
                {cloneElement(item.icon, {
                  className: "size-6",
                } as React.SVGProps<SVGSVGElement>)}
                <motion.span animate={{ opacity: expanded ? 1 : 0 }}>
                  {expanded && item.name}
                </motion.span>
                {item.subnav && (
                  <motion.span
                    className="inline-block"
                    animate={{
                      rotate: openNav === item.name ? 90 : 0,
                    }}
                  >
                    <motion.span animate={{ opacity: expanded ? 1 : 0 }}>
                      <LucideChevronRight className={cn("size-5")} />
                    </motion.span>
                  </motion.span>
                )}
              </div>
              <HeightAnimation
                isOpen={item.name === openNav}
                className={`pl-4 overflow-hidden ${
                  item.name === openNav && "mt-4"
                }`}
              >
                <Nav data={item.subnav} expanded={expanded} />
              </HeightAnimation>
            </div>
          ) : (
            <Link
              className={cn(
                "flex gap-6 items-center hover:underline hover:underline-offset-4 hover:text-primary",
                pathname === item.href &&
                  "text-primary underline underline-offset-4"
              )}
              href={item.href}
            >
              {cloneElement(item.icon, {
                className: "size-6",
              } as React.HTMLAttributes<SVGElement>)}
              <motion.span animate={{ opacity: expanded ? 1 : 0 }}>
                {expanded && item.name}
              </motion.span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

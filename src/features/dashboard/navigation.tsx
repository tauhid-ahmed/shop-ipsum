"use client";

import { cloneElement, useState } from "react";
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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeightAnimation } from "./animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
// import * as paths from "@/constants/paths";

type NavItem = {
  name: string;
  icon: React.ReactElement;
  href: string;
  subnav?: NavItem[];
};
type NavProps = {
  data: NavItem[];
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
    name: "Home",
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

export function DashboardNavigation() {
  return (
    <nav>
      <Nav data={navItems} />
    </nav>
  );
}

function Nav({ data }: { data: NavItem[] }) {
  const [openNav, setOpenNav] = useState("");
  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <li className="flex items-center gap-8" key={item.name}>
          {item.subnav ? (
            <div className="flex flex-col">
              <button
                onClick={() =>
                  setOpenNav(openNav === item.name ? "" : item.name)
                }
                className="flex gap-2 items-center cursor-pointer"
              >
                {cloneElement(item.icon, {
                  className: "size-4",
                } as React.SVGProps<SVGSVGElement>)}
                {item.name}
                {item.subnav && (
                  <motion.span
                    className="inline-block"
                    animate={{
                      rotate: openNav === item.name ? 90 : 0,
                    }}
                  >
                    <LucideChevronRight className={cn("size-4")} />
                  </motion.span>
                )}
              </button>
              <HeightAnimation
                isOpen={item.name === openNav}
                className={`pl-4 overflow-hidden ${
                  item.name === openNav && "mt-2"
                }`}
              >
                <Nav data={item.subnav} />
              </HeightAnimation>
            </div>
          ) : (
            <Link className="flex gap-2 items-center" href={item.href}>
              {cloneElement(item.icon, {
                className: "size-4",
              } as React.HTMLAttributes<SVGElement>)}
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

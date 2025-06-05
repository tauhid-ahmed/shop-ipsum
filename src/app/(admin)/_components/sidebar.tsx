"use client";

import { useEffect, createElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { LucideChevronRight, LucidePackage, LucideUser } from "lucide-react";

import { ActiveLink, Heading } from "@/components";
import { cn } from "@/lib/utils";
import { env } from "@/env";

import { useSidebar } from "./sidebar-provider";
import {
  navigationData,
  type NavItemType,
  type SidebarSectionType,
} from "../data/sidebar-data";

type SidebarSectionProps = {
  sectionName: string;
  sections: SidebarSectionType[];
};

export default function Sidebar() {
  const { handlePointerEnter, handlePointerLeave } = useSidebar();

  return (
    <nav
      className="h-screen flex flex-col border overflow-y-scroll"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <SidebarHeader />

      <div className="flex-1 overflow-y-scroll space-y-4">
        {Object.entries(navigationData).map(([sectionName, sections]) => (
          <SidebarSection
            key={sectionName}
            sectionName={sectionName}
            sections={sections}
          />
        ))}
      </div>

      <SidebarFooter />
    </nav>
  );
}

function SidebarSection({ sectionName, sections }: SidebarSectionProps) {
  return (
    <div className="px-4 space-y-1">
      <Heading as="h4" size="sm" className="text-muted-foreground capitalize">
        <AnimatedLabel>{sectionName}</AnimatedLabel>
      </Heading>

      <ul>
        {sections.map((section) => (
          <li key={section.title}>
            {section.url ? (
              <ActiveLink
                href={section.url}
                className={cn(
                  "flex flex-nowrap gap-2 items-center relative before:absolute before:-inset-x-4 before:h-full before:block before:-z-10 hover:before:bg-muted"
                )}
              >
                <SidebarIcon icon={section.icon} />
                <AnimatedLabel>{section.title}</AnimatedLabel>
              </ActiveLink>
            ) : (
              <CollapsibleSection
                section={section}
                sectionName={section.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CollapsibleSection({
  section,
  sectionName,
}: {
  section: SidebarSectionType;
  sectionName: string;
}) {
  const { handleActiveSection, activeSection, isExpanded } = useSidebar();

  if (!section.navItems) return null;

  const isActive = activeSection === sectionName;

  return (
    <>
      <button
        className={cn(
          "flex items-center flex-nowrap py-2x gap-2 w-full cursor-pointer justify-start relative before:absolute before:-inset-x-4 before:h-full before:block before:-z-10 hover:before:bg-muted",
          isActive && "before:bg-muted"
        )}
        onClick={() =>
          handleActiveSection({ value: sectionName, type: "accordion" })
        }
      >
        <SidebarIcon icon={section.icon} />
        <AnimatedLabel>{section.title}</AnimatedLabel>

        {isExpanded && (
          <span
            className={cn(
              "ml-auto transition-transform duration-200",
              isActive && "rotate-90"
            )}
          >
            <LucideChevronRight size={20} className="text-muted-foreground" />
          </span>
        )}
      </button>

      <NestedLinks sectionName={sectionName} navItems={section.navItems} />
    </>
  );
}

function NestedLinks({
  sectionName,
  navItems,
}: {
  sectionName: string;
  navItems: NavItemType[];
}) {
  const { isExpanded, activeSection, handleActiveSection } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    if (!isExpanded) return;
    const current = navItems.find((item) => item.url === pathname);
    if (current) {
      handleActiveSection({ type: "link", value: sectionName });
    }
  }, [pathname, isExpanded]);

  if (!isExpanded || activeSection !== sectionName) return null;

  return (
    <ul className="border-l ml-2 mt-px border-border space-y-0.5">
      {navItems.map((item, i) => (
        <li key={i} className="hover:bg-muted pl-3 py-1">
          <ActiveLink href={item.url}>{item.title}</ActiveLink>
        </li>
      ))}
    </ul>
  );
}

function SidebarHeader() {
  const { isExpanded } = useSidebar();

  return (
    <div className="p-4 flex gap-2 items-center">
      <span className="bg-primary/20 text-primary rounded">
        <SidebarIcon icon={LucidePackage} size={32} />
      </span>

      {isExpanded && (
        <div className="mt-2">
          <Heading as="h4" size="default" className="leading-1.5">
            {env.NEXT_PUBLIC_APP_NAME}
          </Heading>
          <span className="text-sm text-muted-foreground">
            Enterprise Edition
          </span>
        </div>
      )}
    </div>
  );
}

function SidebarFooter() {
  const { isExpanded } = useSidebar();

  return (
    <div className="p-4 flex gap-2 items-center">
      <span className="bg-primary/20 text-primary rounded p-0.5">
        <SidebarIcon icon={LucideUser} size={32} />
      </span>

      {isExpanded && (
        <div className="mt-2">
          <Heading as="h4" size="default" className="leading-1.5">
            Sarah Johnson
          </Heading>
          <span className="text-sm text-muted-foreground">
            Store Administrator
          </span>
        </div>
      )}
    </div>
  );
}

function AnimatedLabel({ children }: React.PropsWithChildren) {
  const { isExpanded } = useSidebar();

  return isExpanded ? (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.span>
  ) : null;
}

function SidebarIcon({
  icon,
  size = 20,
}: {
  icon: React.ComponentType<{ size: number }>;
  size?: number;
}) {
  return (
    <span className="size-10 flex items-center justify-center shrink-0">
      {createElement(icon, { size })}
    </span>
  );
}

"use client";
import { ActiveLink, Heading } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement, useEffect } from "react";
import {
  navigationData,
  NavItemType,
  type SidebarSectionType,
} from "../data/sidebar-data";
import { useSidebar } from "./sidebar-provider";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  LucideChevronRight,
  LucidePackage,
  LucidePackage2,
  LucidePercentSquare,
  LucideUser,
} from "lucide-react";
import { env } from "@/env";

type SidebarSection = {
  sectionName: string;
  sections: SidebarSectionType[];
} & React.ComponentProps<"div">;

type SidebarSectionItem = {
  sectionName: string;
  section: SidebarSectionType;
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
        {Object.entries(navigationData).map(([sectionName, section]) => {
          return (
            <SidebarSection
              key={sectionName}
              sectionName={sectionName}
              sections={section}
            />
          );
        })}
      </div>
      <SidebarFooter />
    </nav>
  );
}

function SidebarSection({ sectionName, sections }: SidebarSection) {
  return (
    <div className="px-4 space-y-1">
      <Heading
        as="h4"
        size="sm"
        className={cn("text-muted-foreground capitalize")}
      >
        <SectionText>{sectionName}</SectionText>
      </Heading>
      <ul>
        {sections.map((section: SidebarSectionType) => (
          <li key={section.title}>
            {section.url ? (
              <ActiveLink
                className={cn(
                  "flex flex-nowrap gap-2 items-center relative before:absolute before:-inset-x-4 before:h-full before:block before:-z-10 hover:before:bg-muted"
                )}
                href={section.url}
              >
                <SidebarIcon icon={section.icon} />
                <SectionText>{section.title}</SectionText>
              </ActiveLink>
            ) : (
              <SidebarSectionItem
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

function SidebarSectionItem({
  section,
  sectionName,
}: {
  section: SidebarSectionType;
  sectionName: string;
}) {
  const { handleActiveSection, activeSection, isExpanded } = useSidebar();
  if (!section.navItems) return null;
  return (
    <>
      <button
        className={cn(
          "flex items-center flex-nowrap py-2x gap-2 w-full cursor-pointer justify-start relative before:absolute before:-inset-x-4 before:h-full before:block before:-z-10 hover:before:bg-muted",
          activeSection === sectionName && "before:bg-muted"
        )}
        onClick={() => {
          handleActiveSection({ value: sectionName, type: "accordion" });
        }}
      >
        <SidebarIcon icon={section.icon} />
        <SectionText>{section.title}</SectionText>
        {isExpanded && (
          <span
            className={cn(
              "ml-auto transition-transform duration-200",
              activeSection === sectionName && "rotate-90"
            )}
          >
            <LucideChevronRight size={20} className="text-muted-foreground" />
          </span>
        )}
      </button>
      <NavMenu sectionName={sectionName} navigationData={section.navItems} />
    </>
  );
}

function NavMenu({
  sectionName,
  navigationData,
}: {
  sectionName: string;
  navigationData: NavItemType[];
}) {
  const { isExpanded, activeSection, handleActiveSection } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    if (!isExpanded) return;
    const currentActive = navigationData.find((data) => data.url === pathname);
    if (currentActive) {
      handleActiveSection({
        type: "link",
        value: sectionName,
      });
    }
  }, [pathname, isExpanded]);

  if (isExpanded && activeSection === sectionName)
    return (
      <ul className="border-l ml-2 mt-px border-border space-y-0.5">
        {navigationData.map((path, pathIndex) => {
          return (
            <li className="hover:bg-muted pl-3 py-1" key={pathIndex}>
              <ActiveLink href={path.url}>{path.title}</ActiveLink>
            </li>
          );
        })}
      </ul>
    );
  return null;
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

function SectionText({ children }: React.PropsWithChildren) {
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

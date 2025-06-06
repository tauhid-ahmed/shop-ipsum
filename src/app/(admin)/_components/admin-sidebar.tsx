"use client";

import {
  LucideChevronRight,
  LucidePackage,
  LucidePanelLeftDashed,
  LucidePanelRightDashed,
  LucideUser,
} from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { createElement, useEffect } from "react";

import { ActiveLink, Heading } from "@/components";
import { env } from "@/env";
import { cn } from "@/lib/utils";

import {
  navigationData,
  type NavItemType,
  type SidebarSectionType,
} from "../data/sidebar-data";
import { useSidebar } from "./sidebar-provider";
import { Button } from "@/components/ui/button";

type SidebarSectionProps = {
  sectionName: string;
  sections: SidebarSectionType[];
};

export default function Sidebar() {
  const { handlePointerEnter, handlePointerLeave, isCollapsedSidebar } =
    useSidebar();

  return (
    <motion.nav
      className={cn(
        "h-screen flex flex-col border-r border-border bg-popover gap-4 z-50 sticky top-0 text-sm whitespace-nowrap",
        isCollapsedSidebar && "fixed left-0"
      )}
      style={{
        width: isCollapsedSidebar
          ? "var(--_sidebar-collapsed)"
          : "var(--_sidebar-expanded)",
      }}
      animate={{
        width: isCollapsedSidebar
          ? "var(--_sidebar-collapsed)"
          : "var(--_sidebar-expanded)",
      }}
      whileHover={{
        width: "var(--_sidebar-expanded)",
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <SidebarHeader />

      <div className="flex-1 overflow-y-scroll space-y-[var(--_sidebar-spacing)]">
        {Object.entries(navigationData).map(([sectionName, sections]) => (
          <SidebarSection
            key={sectionName}
            sectionName={sectionName}
            sections={sections}
          />
        ))}
      </div>

      <SidebarFooter />
    </motion.nav>
  );
}

function SidebarSection({ sectionName, sections }: SidebarSectionProps) {
  return (
    <div className="px-[var(--_sidebar-spacing)]">
      <div className="border-b border-double border-border pb-2 space-y-1">
        <Heading
          as="h4"
          size="xs"
          className="text-muted-foreground capitalize px-[var(--_sidebar-spacing)]"
        >
          <AnimatedLabel>{sectionName}</AnimatedLabel>
        </Heading>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.title}>
              {section.url ? (
                <ActiveLabel>
                  <ActiveLink
                    href={section.url}
                    className={cn("flex flex-nowrap gap-1 items-center")}
                  >
                    <SidebarIcon icon={section.icon} />
                    <AnimatedLabel>{section.title}</AnimatedLabel>
                  </ActiveLink>
                </ActiveLabel>
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
      <ActiveLabel
        className={isActive ? "bg-primary text-primary-foreground" : ""}
      >
        <button
          className={cn(
            "flex items-center flex-nowrap gap-1 w-full cursor-pointer justify-start group"
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
              <LucideChevronRight
                size={20}
                className={cn(
                  "text-secondary-foreground group-hover:text-primary-foreground",
                  isActive && "text-primary-foreground"
                )}
              />
            </span>
          )}
        </button>
      </ActiveLabel>
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
    <ul className="border-l ml-[var(--_sidebar-spacing)] pl-[var(--_sidebar-spacing)] my-1 border-border space-y-1">
      {navItems.map((item, i) => (
        <li key={i}>
          <ActiveLink href={item.url}>
            <ActiveLabel leftExpanded>
              <AnimatedLabel>{item.title}</AnimatedLabel>
            </ActiveLabel>
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
}

function SidebarHeader() {
  const { isExpanded } = useSidebar();

  return (
    <div className="p-[var(--_sidebar-spacing)] flex gap-2 items-center relative border-b border-border h-[var(--_sidebar-header-height)]">
      <span className="bg-primary/20 text-primary rounded">
        <SidebarIcon icon={LucidePackage} size="lg" />
      </span>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2"
        >
          <Heading as="h4" size="default" className="leading-2.5">
            {env.NEXT_PUBLIC_APP_NAME}
          </Heading>
          <span className="text-sm text-muted-foreground">
            Enterprise Edition
          </span>
        </motion.div>
      )}
    </div>
  );
}

function SidebarFooter() {
  const { isExpanded } = useSidebar();

  return (
    <div className="p-4 flex gap-2 items-start h-[var(--_sidebar-footer-height)]">
      <span className="bg-primary/20 text-primary rounded">
        <SidebarIcon icon={LucideUser} size="lg" />
      </span>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2"
        >
          <Heading as="h4" size="default" className="leading-2.5">
            Sarah Johnson
          </Heading>
          <span className="text-sm text-muted-foreground">
            Store Administrator
          </span>
        </motion.div>
      )}
    </div>
  );
}

function ActiveLabel({
  children,
  className,
  leftExpanded,
}: { leftExpanded?: boolean } & React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "block relative hover:bg-primary hover:text-primary-foreground rounded-sm [.is-active-link_&]:bg-primary [.is-active-link_&]:text-primary-foreground",
        {
          "-ml-[var(--_sidebar-spacing)] px-[var(--_sidebar-spacing)]":
            leftExpanded,
        },
        className
      )}
    >
      {children}
    </span>
  );
}

function AnimatedLabel({ children }: React.PropsWithChildren) {
  const { isExpanded } = useSidebar();

  return isExpanded ? (
    <motion.span
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className="py-1 block"
    >
      {children}
    </motion.span>
  ) : null;
}

function SidebarIcon({
  icon,
  size = "sm",
}: {
  icon: React.ComponentType<{ className: string }>;
  size?: "sm" | "lg";
}) {
  return (
    <span
      className={
        "size-[var(--_sidebar-icon-container)] leading-0 flex items-center justify-center shrink-0"
      }
    >
      {createElement(icon, {
        className: cn({
          "size-[var(--_sidebar-icon-sm)]": size === "sm",
          "size-[var(--_sidebar-icon-lg)]": size === "lg",
        }),
      })}
    </span>
  );
}

export function SidebarToggleButton() {
  const { isExpanded, toggleSidebarCollapse } = useSidebar();
  return (
    <Button
      variant="transparent"
      className="size-8 bg-primary/30"
      onClick={toggleSidebarCollapse}
    >
      {isExpanded ? (
        <LucidePanelLeftDashed className="size-6" />
      ) : (
        <LucidePanelRightDashed className="size-6" />
      )}
    </Button>
  );
}

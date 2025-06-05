"use client";
import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  navigationData,
  NavItemType,
  type SidebarSectionType,
} from "../data/sidebar-data";
import { useSidebar } from "./sidebar-provider";

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
      className="h-screen border overflow-y-scroll space-y-4 p-4"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {Object.entries(navigationData).map(([sectionName, section]) => {
        return (
          <SidebarSection
            key={sectionName}
            sectionName={sectionName}
            sections={section}
          />
        );
      })}
    </nav>
  );
}

function SidebarSection({ sectionName, sections }: SidebarSection) {
  return (
    <ul className="space-y-2">
      <Heading as="h4" size="sm" className="text-muted-foreground capitalize">
        {sectionName}
      </Heading>
      {sections.map((section: SidebarSectionType) => {
        const Icon = section.icon;
        return (
          <li key={section.title}>
            {section.url ? (
              <Link className="flex gap-2 items-center" href={section.url}>
                <Icon size={18} /> {section.title}
              </Link>
            ) : (
              <SidebarSectionItem
                section={section}
                sectionName={section.title}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function SidebarSectionItem({
  section,
  sectionName,
}: {
  section: SidebarSectionType;
  sectionName: string;
}) {
  const { handleActiveSection } = useSidebar();
  if (!section.navItems) return null;
  const Icon = section.icon;
  return (
    <>
      <button
        className="flex items-center gap-2"
        onClick={() => {
          handleActiveSection({ value: sectionName, type: "accordion" });
        }}
      >
        <Icon size={18} />
        {section.title}
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

  const currentActiveSection = navigationData.find(
    (data) => data.url === pathname
  );

  useEffect(() => {
    if (currentActiveSection) {
      handleActiveSection({
        type: "link",
        value: pathname === currentActiveSection.url ? sectionName : "",
      });
    }
  }, [pathname]);

  if (isExpanded && activeSection === sectionName)
    return (
      <ul className="border-l ml-5 pl-3 space-y-2">
        {navigationData.map((path, pathIndex) => {
          return (
            <li key={pathIndex}>
              <Link href={path.url}>{path.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  return null;
}

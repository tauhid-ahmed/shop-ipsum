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
      className="h-screen border overflow-y-scroll space-y-4"
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
    <ul className="border">
      <Heading>{sectionName}</Heading>
      {sections.map((section: SidebarSectionType) => (
        <li key={section.title}>
          {section.url ? (
            <Link href={section.url}>{section.title}</Link>
          ) : (
            <SidebarSectionItem section={section} sectionName={sectionName} />
          )}
        </li>
      ))}
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
  const { setActiveNavItem } = useSidebar();
  if (!section.navItems) return null;

  return (
    <div>
      <Button
        onClick={() =>
          setActiveNavItem({ value: section.title, type: "accordion" })
        }
      >
        {section.title}
      </Button>
      <NavMenu navigationData={section.navItems} />
    </div>
  );
}

function NavMenu({ navigationData }: { navigationData: NavItemType[] }) {
  const { isExpanded, activeNavItem } = useSidebar();
  if (isExpanded && activeNavItem)
    return (
      <ul>
        {navigationData.map((path, pathIndex) => (
          <li key={pathIndex}>
            <Link href={path.url}>{path.title}</Link>
          </li>
        ))}
      </ul>
    );
}

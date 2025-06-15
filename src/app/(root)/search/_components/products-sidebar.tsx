"use client";

import { Heading } from "@/components";
import {
  FilterBrands,
  FilterCategories,
  FilterColors,
  FilterPrice,
  FilterSection,
  FilterSizes,
} from "./products-facets";
import { useProductLayout } from "./product-layout-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideX } from "lucide-react";

export function ProductsSidebar({}) {
  const { isSidebarCollapsed } = useProductLayout();
  return (
    <aside
      className={cn(
        "sticky top-22 whitespace-nowrap h-screen transition-opacity duration-200 rounded after:absolute after:inset-x-0 after:h-24 after:bg-sidebar after:bottom-0 after:-z-10 after:rounded after:pointer-events-none",
        isSidebarCollapsed && "opacity-0 invisible",
        !isSidebarCollapsed && "visible opacity-100"
      )}
    >
      <div className="flex items-center justify-between h-16 p-2 z-10 relative backdrop-blur-2xl">
        <Heading as="h2" size="xl">
          Filter
        </Heading>
        <Button variant="transparent" size="sm">
          <LucideX /> Clear
        </Button>
      </div>
      <div className="px-4 bg-sidebar rounded h-[calc(100vh-9.5rem)] overflow-y-scroll pb-10 z-10">
        <div className="mt-4 space-y-4">
          <FilterSection title="Price">
            <FilterPrice />
          </FilterSection>
          <FilterSection title="Categories">
            <FilterCategories />
          </FilterSection>
          <FilterSection title="Brand">
            <FilterBrands />
          </FilterSection>
          <FilterSection title="Colors">
            <FilterColors />
          </FilterSection>
          <FilterSection title="Sizes">
            <FilterSizes />
          </FilterSection>
          <FilterSection title="Sizes">
            <FilterSizes />
          </FilterSection>
        </div>
      </div>
    </aside>
  );
}

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
        "sticky top-22 whitespace-nowrap h-screen transition-opacity duration-200 rounded",
        isSidebarCollapsed && "opacity-0 invisible",
        !isSidebarCollapsed && "visible opacity-100"
      )}
    >
      <div className="flex items-center justify-between h-16 p-4">
        <Heading as="h2" size="xl">
          Filter
        </Heading>
        <Button variant="transparent" size="sm">
          <LucideX /> Clear
        </Button>
      </div>
      <div className="px-4 bg-sidebar rounded h-[calc(100vh-9.5rem)] overflow-y-scroll pb-10">
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
        </div>
      </div>
    </aside>
  );
}

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

export function ProductsSidebar({}) {
  const { isSidebarCollapsed } = useProductLayout();
  return (
    <aside
      className={cn(
        "sticky top-18 h-screen whitespace-nowrap bg-sidebar transition-opacity duration-200",
        isSidebarCollapsed && "opacity-0 invisible",
        !isSidebarCollapsed && "visible opacity-100"
      )}
    >
      <div className="h-16 p-4 border-b border-border -mr-4 bg-sidebar">
        <Heading as="h2" size="2xl">
          Explore
        </Heading>
      </div>
      <div className="h-screen overflow-y-scroll px-4">
        <div className="mt-4 space-y-4 ">
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

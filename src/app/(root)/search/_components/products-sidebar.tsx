"use client";

import { Heading } from "@/components";
import {
  FilterBrands,
  FilterCategories,
  FilterColors,
  FilterPrice,
  FilterSection,
  FilterSizes,
} from "./products-filter";
import { useProductLayout } from "./product-layout-provider";
import { cn } from "@/lib/utils";
type Props = {} & React.ComponentProps<"div">;

export function ProductsSidebar({}) {
  const { isSidebarCollapsed } = useProductLayout();
  return (
    <aside
      className={cn(
        "overflow-hidden sticky top-18 h-screen whitespace-nowrap px-4 bg-sidebar transition-opacity duration-200",
        isSidebarCollapsed && "opacity-0 invisible",
        !isSidebarCollapsed && "visible opacity-100"
      )}
    >
      <div className="mt-4 space-y-4 ">
        <Heading as="h2" size="2xl">
          Explore
        </Heading>
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
    </aside>
  );
}

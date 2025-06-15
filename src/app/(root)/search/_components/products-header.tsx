import { Button } from "@/components/ui/button";
import { useProductLayout } from "./product-layout-provider";
import {
  LucideArrowUpDown,
  LucideGrid3X3,
  LucideLayoutList,
  LucidePanelLeftDashed,
} from "lucide-react";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function ProductsHeader() {
  const {
    addProductDisplayModeGrid,
    addProductDisplayModeList,
    toggleSidebarCollapse,
    isSidebarCollapsed,
  } = useProductLayout();

  return (
    <div className={cn("flex justify-between py-4 h-16 z-50 rounded")}>
      <div className="flex gap-4 items-center">
        <Button variant="outline" size="icon" onClick={toggleSidebarCollapse}>
          <LucidePanelLeftDashed />
        </Button>
        <span className="text-sm text-muted-foreground">
          Showing 100 results
        </span>
      </div>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="rounded-full">
            <LucideArrowUpDown />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value="apple">Default Sorting</SelectItem>
              <SelectItem value="banana">Low to High</SelectItem>
              <SelectItem value="blueberry">High to Low</SelectItem>
              <SelectItem value="grapes">New Added</SelectItem>
              <SelectItem value="pineapple">On Sale</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={addProductDisplayModeGrid}
          >
            <LucideGrid3X3 />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={addProductDisplayModeList}
          >
            <LucideLayoutList />
          </Button>
        </div>
      </div>
    </div>
  );
}

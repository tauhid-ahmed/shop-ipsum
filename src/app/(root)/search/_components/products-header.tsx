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

export function ProductsHeader() {
  const {
    addProductDisplayModeGrid,
    addProductDisplayModeList,
    toggleSidebarCollapse,
  } = useProductLayout();

  return (
    <div className="flex justify-between py-4 border-b border-border z-50 sticky top-18 bg-background backdrop-blur">
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
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="">
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

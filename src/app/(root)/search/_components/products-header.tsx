import { Button } from "@/components/ui/button";
import { useProductLayout } from "./product-layout-provider";
import {
  LucideGrid3X3,
  LucideLayoutList,
  LucidePanelLeftDashed,
} from "lucide-react";

export function ProductsHeader() {
  const {
    addProductDisplayModeGrid,
    addProductDisplayModeList,
    toggleSidebarCollapse,
  } = useProductLayout();

  return (
    <div className="flex justify-between">
      <Button variant="outline" size="icon" onClick={toggleSidebarCollapse}>
        <LucidePanelLeftDashed />
      </Button>
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
  );
}

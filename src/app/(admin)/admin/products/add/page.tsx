import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { LucideBox, LucideSave, LucideX } from "lucide-react";
import ProductDetails from "../_components/product-form/sections/product-details";

export default function AddNewProductPage() {
  return (
    <div className="pt-[var(--_sidebar-spacing)] space-y-[var(--_sidebar-spacing)]">
      <div className="rounded bg-secondary flex justify-between items-center p-[var(--_sidebar-spacing)]">
        <div className="flex items-center gap-[var(--_sidebar-spacing)]">
          <LucideBox size={48} />
          <div className="bg-accent">
            <Heading as="h2" size="2xl">
              Product Management
            </Heading>
            <p>Essential details and categorization for your product</p>
          </div>
        </div>
        <div className="flex gap-[var(--_sidebar-spacing)]">
          <Button>
            <LucideX /> Cancel
          </Button>
          <Button>
            <LucideSave />
            Save Product
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-[var(--_sidebar-spacing)]">
        <div>
          <ProductDetails />
        </div>

        <div>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

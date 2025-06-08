import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { LucideBox, LucideSave, LucideX } from "lucide-react";
import { ProductForm } from "../_components/product-form";
import { Card, CardContent } from "@/components/ui/card";

export default function AddNewProductPage() {
  return (
    <div className="pt-[var(--_sidebar-spacing)] space-y-[var(--_sidebar-spacing)]">
      <Card>
        <CardContent className="flex justify-between gap-10">
          <div className="flex flex-col relative pl-14">
            <LucideBox
              size={48}
              className="absolute left-0 top-1 text-primary"
            />
            <Heading as="h2" size="2xl">
              Product Management
            </Heading>
            <p>Essential details and categorization for your product</p>
          </div>
          <div className="self-end flex flex-wrap gap-4">
            <Button>
              <LucideX /> Cancel
            </Button>
            <Button>
              <LucideSave />
              Save Product
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="after:block after:h-[50vh]">
        <div className="grid grid-cols-[2fr_1fr] gap-[var(--_sidebar-spacing)]">
          <div>
            <ProductForm />
          </div>

          <div>{/* <ProductForm /> */}</div>
        </div>
      </div>
    </div>
  );
}

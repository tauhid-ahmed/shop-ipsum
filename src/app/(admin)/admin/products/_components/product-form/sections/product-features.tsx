import { ProductFormCard } from "../ui/product-form-card";
import { productFormSections } from "../form-sections.config";
import ActionButton from "../action-button";
import { TextField } from "@/components/text-field";
import { LucideX } from "lucide-react";

const { productFeatures } = productFormSections;

export default function ProductFeatures() {
  return (
    <ProductFormCard
      title={productFeatures.title}
      description={productFeatures.description}
      icon={<productFeatures.icon className="text-emerald-500" />}
    >
      <fieldset className="space-y-6">
        <div className="flex gap-2 items-end">
          <TextField
            className="w-full"
            name="feature"
            placeholder="Product feature"
          />
          <ActionButton
            variant="secondary"
            size="icon"
            className="hover:text-destructive active:text-destructive"
          >
            <LucideX />
          </ActionButton>
        </div>
        <ActionButton
          variant="ghost"
          className="w-full border border-emerald-500 border-dotted"
        >
          + Add Features
        </ActionButton>
      </fieldset>
    </ProductFormCard>
  );
}

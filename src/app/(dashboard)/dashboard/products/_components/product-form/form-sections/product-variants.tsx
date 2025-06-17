import { SelectField } from "@/components";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import ActionButton from "../action-button";
import { LucideLayers, LucideX } from "lucide-react";
import { TextField } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react"; // Or useFieldArray from react-hook-form

const { productVariants } = productFormSections;

// Example structure for a single variant's data
interface Variant {
  id: string; // Unique ID for key prop and management
  color?: string;
  sizeType?: string;
  size?: string;
  stock?: number;
  sku?: string;
  costPrice?: number;
  basePrice?: number;
  sellPrice?: number;
  // ... other variant-specific fields
}

// Example options (should ideally come from a config or API)
const colorOptions = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
];
const sizeTypeOptions = [
  { label: "Apparel", value: "apparel" },
  { label: "Shoes", value: "shoes" },
];
const sizeOptions = [
  { label: "XL", value: "xl" },
  { label: "L", value: "l" },
];

export default function ProductVariants() {
  const [variants, setVariants] = useState<Variant[]>([{ id: "variant-1" }]); // Initial variant
  return (
    <ProductFormCard
      title={productVariants.title}
      description={productVariants.description}
      icon={<productVariants.icon className="text-amber-500" />}
    >
      <fieldset className="space-y-8">
        {variants.map((variant, index) => (
          <VariantItem key={variant.id} variant={variant} index={index} />
        ))}
        <ActionButton
          variant="ghost"
          size="lg"
          className="w-full border border-amber-500 border-dotted"
          onClick={() =>
            setVariants([...variants, { id: `variant-${Date.now()}` }])
          } // Example: Add new variant
        >
          + Add Variant
        </ActionButton>
      </fieldset>
    </ProductFormCard>
  );
}

interface VariantItemProps {
  variant: Variant;
  index: number;
  // onRemove: (id: string) => void; // For removing a variant
}

function VariantItem({ variant, index }: VariantItemProps) {
  // Each field name should be unique per variant, e.g., `variants.${index}.color` with react-hook-form
  const fieldNamePrefix = `variant_${index}-${variant}`;

  return (
    <div className="space-y-6 border-b border-dashed border-border pb-6 mb-6">
      <legend className="py-2 w-full flex justify-between">
        <div className="flex items-center gap-2">
          <LucideLayers className="text-violet-500 size-8 p-1" /> Variant{" "}
          {index + 1}
        </div>
        <ActionButton
          variant="ghost"
          className="hover:text-destructive active:text-destructive"
          // onClick={() => onRemove(variant.id)}
        >
          <LucideX /> Remove
        </ActionButton>
      </legend>
      <div className="flex flex-wrap gap-6">
        <div className="grow shrink basis-40">
          <SelectField
            name={`${fieldNamePrefix}_color`}
            options={colorOptions}
            label="Color"
          />
        </div>
        <div className="grow shrink basis-40">
          <SelectField
            name={`${fieldNamePrefix}_sizeType`}
            options={sizeTypeOptions}
            label="Size Type"
          />
        </div>
        <div className="grow shrink basis-40">
          <SelectField
            name={`${fieldNamePrefix}_size`}
            options={sizeOptions}
            label="Size"
          />
        </div>
        <div className="grow shrink basis-40">
          <TextField
            name={`${fieldNamePrefix}_stock`}
            label="Stock Quantity"
            type="number"
            placeholder="0"
          />
        </div>
        <div className="grow shrink basis-40">
          <TextField
            name={`${fieldNamePrefix}_sku`}
            label="Sku"
            placeholder="Variant Sku"
          />
        </div>
      </div>
      <div className="flex gap-6 flex-wrap">
        <div className="grow shrink basis-40">
          <TextField
            name={`${fieldNamePrefix}_costPrice`}
            label="Cost Price"
            placeholder="$0.00"
          />
        </div>
        <div className="grow shrink basis-40">
          <TextField
            name={`${fieldNamePrefix}_basePrice`}
            label="Base Price"
            placeholder="$0.00"
          />
        </div>
        <div className="grow shrink basis-40">
          <TextField
            name={`${fieldNamePrefix}_sellPrice`}
            label="Sell Price"
            placeholder="$0.00"
          />
        </div>
      </div>
      <VariantDiscountPolicy variantIndex={index} />
    </div>
  );
}

function VariantDiscountPolicy({ variantIndex }: { variantIndex: number }) {
  const fieldNamePrefix = `variant_${variantIndex}_discount`;
  const discountTypeOptions = [
    { label: "Percentage", value: "percentage" },
    { label: "Flat Amount", value: "flatamount" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-amber-500">DISCOUNT (OPTIONAL)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-6 flex-wrap">
          <SelectField
            name={`${fieldNamePrefix}_type`}
            label="Type & Amount"
            placeholder="$0.00"
            options={discountTypeOptions}
          />
          <TextField
            className="flex-1"
            name={`${fieldNamePrefix}_amount`}
            label="Amount"
            placeholder="$0.00"
          />
          <div className="grow shrink basis-40">
            <TextField
              name={`${fieldNamePrefix}_name`}
              label="Discount Name"
              placeholder="Type of discount"
            />
          </div>
        </div>
        <TextField
          className="flex-1"
          name={`${fieldNamePrefix}_description`}
          label="Discount description"
          placeholder="Discount description"
        />
        <TextField
          className="flex-1"
          name={`${fieldNamePrefix}_policy`}
          label="Discount policy"
          placeholder="Discount Policy"
        />
      </CardContent>
    </Card>
  );
}

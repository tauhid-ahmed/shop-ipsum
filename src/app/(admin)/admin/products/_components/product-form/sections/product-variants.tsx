import { Heading, SelectField } from "@/components";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import ActionButton from "../action-button";
import { LucideLayers, LucideX } from "lucide-react";
import { TextField } from "@/components/text-field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const { productVariants } = productFormSections;

export default function ProductVariants() {
  return (
    <ProductFormCard
      title={productVariants.title}
      description={productVariants.description}
      icon={<productVariants.icon className="text-amber-500" />}
    >
      <fieldset className="space-y-8">
        <legend className="py-2 w-full flex justify-between rounded border-b border-dashed border-border">
          <div className="flex items-center gap-2">
            <LucideLayers className="text-violet-500 size-8 p-1" /> Variant 1
          </div>
          <ActionButton
            variant="ghost"
            className="hover:text-destructive active:text-destructive"
          >
            <LucideX /> Remove
          </ActionButton>
        </legend>
        <div className="flex flex-wrap gap-6">
          <div className="grow shrink basis-40">
            <SelectField
              name="color"
              options={[{ label: "Color", value: "color" }]}
              label="Color"
            />
          </div>

          <div className="grow shrink basis-40">
            <SelectField
              name="size-type"
              options={[{ label: "Size Type", value: "XL" }]}
              label="Size Type"
            />
          </div>

          <div className="grow shrink basis-40">
            <SelectField
              name="Size"
              options={[{ label: "Size", value: "size" }]}
              label="Size"
            />
          </div>

          <div className="grow shrink basis-40">
            <SelectField
              name="Stock"
              options={[{ label: "Stock Quantity", value: "10" }]}
              label="Stock Quantity"
            />
          </div>

          <div className="grow shrink basis-40">
            <TextField name="Sku" label="Sku" placeholder="Variant Sku" />
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          <div className="grow shrink basis-40">
            <TextField
              name="cost-price"
              label="Cost Price"
              placeholder="$0.00"
            />
          </div>
          <div className="grow shrink basis-40">
            <TextField
              name="base-price"
              label="Base Price"
              placeholder="$0.00"
            />
          </div>
          <div className="grow shrink basis-40">
            <TextField
              name="sell-price"
              label="Sell Price"
              placeholder="$0.00"
            />
          </div>
        </div>
        <DiscountAndPolicy />
        <ActionButton
          variant="ghost"
          size="lg"
          className="w-full border border-amber-500 border-dotted"
        >
          + Add Variant
        </ActionButton>
      </fieldset>
    </ProductFormCard>
  );
}

function DiscountAndPolicy() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-amber-500">DISCOUNT (OPTIONAL)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-6 flex-wrap">
          <SelectField
            name="cost-price"
            label="Type & Amount"
            placeholder="$0.00"
            options={[
              { label: "Percentage", value: "percentage" },
              { label: "Flat Amount", value: "flatamount" },
            ]}
          />
          <TextField
            className="flex-1"
            name="base-price"
            label="Amount"
            placeholder="$0.00"
          />
          <div className="grow shrink basis-40">
            <TextField
              name="sell-price"
              label="Discount Name"
              placeholder="Type of discount"
            />
          </div>
        </div>
        <TextField
          className="flex-1"
          name="sell-price"
          label="Discount description"
          placeholder="Discount description"
        />
        <TextField
          className="flex-1"
          name="sell-price"
          label="Discount policy"
          placeholder="Discount Policy"
        />
      </CardContent>
    </Card>
  );
}

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { SelectField, TextField } from "@/components";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import { useFormContext } from "react-hook-form";

const { productShipping } = productFormSections;

const shippingTypeOptions = [
  { label: "Standard Shipping", value: "standard" },
  { label: "Express Shipping", value: "express" },
  { label: "Free Shipping", value: "free" },
  { label: "Local Pickup Only", value: "local_pickup" },
];

export default function ProductShipping() {
  const { control } = useFormContext(); // For Checkbox integration

  return (
    <ProductFormCard
      title={productShipping.title}
      description={productShipping.description}
      icon={<productShipping.icon className="text-cyan-500" />} // Example color
    >
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          name="shippingWeight"
          label="Package Weight (kg)"
          type="number"
          placeholder="e.g., 0.5"
          step="0.01"
        />
        <TextField
          name="shippingDimensions"
          label="Package Dimensions (L x W x H cm)"
          placeholder="e.g., 20x15x10"
        />
        <TextField
          name="shippingClass"
          label="Shipping Class (Optional)"
          placeholder="e.g., Standard, Express"
        />
        <SelectField
          name="shippingType"
          label="Shipping Type"
          options={shippingTypeOptions}
          placeholder="Select shipping type"
        />
        <FormField
          control={control}
          name="shippingRequiresPhysical"
          defaultValue={true} // Assuming most products require shipping
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 md:col-span-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>This product requires shipping</FormLabel>
            </FormItem>
          )}
        />
      </fieldset>
    </ProductFormCard>
  );
}

"use client";

import { SelectField, TextField } from "@/components"; // Assuming TextField can be used for date for now
import { Button } from "@/components/ui/button";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import { LucideEye, LucideSave } from "lucide-react";
// import DatePickerField from "@/components/date-picker-field"; // Ideal component

const { productStatusVisibility } = productFormSections;

const productStatusOptions = [
  { label: "Draft", value: "draft" },
  { label: "Published", value: "published" },
  { label: "Archived", value: "archived" },
];

const productVisibilityOptions = [
  { label: "Public", value: "public" },
  { label: "Hidden", value: "hidden" },
  { label: "Password Protected", value: "password_protected" },
];

export default function ProductStatusVisibility() {
  const handleUpdateStatus = () => {
    console.log("Update status/visibility clicked");
    // Add logic to save these specific fields
  };

  const handlePreviewProduct = () => {
    console.log("Preview product clicked");
    // Add logic to navigate to a preview page or open a modal
  };

  return (
    <ProductFormCard
      title={productStatusVisibility.title}
      description={productStatusVisibility.description}
      icon={<productStatusVisibility.icon className="text-blue-500" />} // Example color
    >
      <fieldset className="space-y-6">
        <SelectField
          name="productStatus"
          label="Product Status"
          options={productStatusOptions}
          placeholder="Select status"
        />
        <SelectField
          name="productVisibility"
          label="Visibility"
          options={productVisibilityOptions}
          placeholder="Select visibility"
        />
        <div>
          {/* Replace TextField with a proper DatePickerField when available */}
          <TextField
            name="productPublishDate"
            label="Publishing Date"
            type="datetime-local" // Or "date" if time is not needed
            helperText="Schedule when the product goes live."
          />
          {/* <DatePickerField name="productPublishDate" label="Publishing Date" /> */}
        </div>
      </fieldset>
      <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={handlePreviewProduct}
          className="w-full sm:w-auto"
        >
          <LucideEye size={16} className="mr-2" /> Preview
        </Button>
        <Button onClick={handleUpdateStatus} className="w-full sm:w-auto">
          <LucideSave size={16} className="mr-2" /> Update Status
        </Button>
      </div>
    </ProductFormCard>
  );
}

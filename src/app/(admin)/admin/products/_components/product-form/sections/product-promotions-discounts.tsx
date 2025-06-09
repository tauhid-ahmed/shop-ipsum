"use client";

import { SelectField, TextField } from "@/components";
import { Button } from "@/components/ui/button";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import { LucidePercent, LucideTicket, LucideTrash2 } from "lucide-react";
// import DatePickerField from "@/components/date-picker-field"; // Ideal component

const { productPromotionDiscounts } = productFormSections;

const discountTypeOptions = [
  { label: "Percentage Off", value: "percentage" },
  { label: "Fixed Amount Off", value: "fixed_amount" },
  { label: "Buy X Get Y Free", value: "bogo" }, // Example, more complex
];

export default function ProductPromotionsDiscounts() {
  // In a real app, you'd likely manage a list of discounts
  // For simplicity, this example shows fields for a single discount

  const handleAddDiscountRule = () => {
    console.log("Add new discount rule");
    // Logic to add another set of discount fields if managing multiple
  };

  return (
    <ProductFormCard
      title={productPromotionDiscounts.title}
      description={productPromotionDiscounts.description}
      icon={<productPromotionDiscounts.icon className="text-green-500" />} // Example color
    >
      <fieldset className="space-y-6">
        <TextField
          name="discountName"
          label="Discount Name / Campaign Title"
          placeholder="e.g., Summer Sale, Welcome Offer"
        />
        <SelectField
          name="discountType"
          label="Discount Type"
          options={discountTypeOptions}
          placeholder="Select discount type"
        />
        <TextField
          name="discountValue"
          label="Discount Value"
          type="number"
          placeholder="e.g., 15 (for %) or 10 (for $)"
          helperText="Enter percentage (e.g., 15) or fixed amount (e.g., 10)."
        />
        <TextField
          name="discountCode"
          label="Coupon Code (Optional)"
          placeholder="e.g., SUMMER2024"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Replace TextField with a proper DatePickerField when available */}
          <TextField
            name="discountStartDate"
            label="Start Date"
            type="datetime-local"
          />
          <TextField
            name="discountEndDate"
            label="End Date"
            type="datetime-local"
          />
        </div>
      </fieldset>
      {/* Example for adding multiple discount rules - more complex state management needed */}
      {/* <div className="mt-6 pt-6 border-t border-border">
        <Button variant="outline" onClick={handleAddDiscountRule} className="w-full sm:w-auto">
          <LucidePlusCircle size={16} className="mr-2" /> Add Another Discount Rule
        </Button>
      </div> */}
    </ProductFormCard>
  );
}

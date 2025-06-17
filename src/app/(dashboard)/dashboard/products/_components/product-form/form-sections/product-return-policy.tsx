"use client";

import { SelectField } from "@/components";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";

const { productReturnPolicy } = productFormSections;

const returnEligibilityOptions = [
  { label: "Eligible for Return", value: "eligible" },
  { label: "Not Eligible for Return", value: "not_eligible" },
  { label: "Conditional Return", value: "conditional" },
];

export default function ProductReturnPolicy() {
  return (
    <ProductFormCard
      title={productReturnPolicy.title}
      description={productReturnPolicy.description}
      icon={<productReturnPolicy.icon className="text-rose-500" />} // Example color
    >
      <fieldset className="space-y-6">
        <SelectField
          name="returnPolicyEligibility"
          label="Return Eligibility"
          options={returnEligibilityOptions}
          placeholder="Select return eligibility"
        />
        <TextField
          name="returnPolicyDuration"
          label="Return Window (Days)"
          type="number"
          placeholder="e.g., 30"
        />
        <TextArea
          name="returnPolicyDetails"
          label="Detailed Return Policy"
          placeholder="Describe the conditions, process, and any fees for returns..."
          rows={6}
        />
      </fieldset>
    </ProductFormCard>
  );
}

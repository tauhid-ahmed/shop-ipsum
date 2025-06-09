"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProductDetails,
  ProductFeatures,
  ProductMedia,
  ProductVariants,
  ProductSeoMeta,
  ProductReturnPolicy,
  ProductShipping,
  ProductAiGenerator, // Make sure this is imported
} from "./sections";

const dummyMediaStats = {
  imageCount: 0,
  storageUsed: "0MB",
  imageLimit: 10,
};
export function ProductForm() {
  const form = useForm({
    defaultValues: {},
    // It's good practice to define defaultValues for all form fields, including SEO:
    // defaultValues: {
    //   seoMetaTitle: "",
    //   seoMetaDescription: "",
    //   seoProductSlug: "",
    //   seoMetaKeywords: "",
    //   returnPolicyEligibility: "eligible",
    //   returnPolicyDuration: 30,
    //   returnPolicyDetails: "",
    //   shippingWeight: "",
    //   shippingDimensions: "",
    //   shippingClass: "",
    //   shippingRequiresPhysical: true,
    //   // ... other product fields
    // },
  });
  return (
    <Form {...form}>
      {/* Main form grid: 2/3 for primary content, 1/3 for secondary/AI tools */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          <ProductDetails isExpanded={true} />
          <ProductVariants />
          <ProductMedia stats={dummyMediaStats} />
          <ProductFeatures />
          <ProductReturnPolicy />{" "}
          {/* Moved Return Policy to left for balance if needed */}
        </div>

        {/* Right Column (Secondary/AI Tools) */}
        <div className="md:col-span-1 space-y-6">
          <ProductAiGenerator />
          <ProductSeoMeta />
          <ProductShipping />
        </div>
      </form>
    </Form>
  );
}

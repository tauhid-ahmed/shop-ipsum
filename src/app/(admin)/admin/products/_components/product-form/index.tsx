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
      <form className="space-y-4">
        <ProductDetails isExpanded={true} />
        <ProductVariants />
        <ProductMedia stats={dummyMediaStats} />
        <ProductFeatures />
        <ProductSeoMeta />
        <ProductReturnPolicy />
        <ProductShipping />
      </form>
    </Form>
  );
}

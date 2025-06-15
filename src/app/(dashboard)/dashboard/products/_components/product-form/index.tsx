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
  ProductStatusVisibility,
  ProductPromotionsDiscounts,
} from "./sections";

const dummyMediaStats = {
  imageCount: 0,
  storageUsed: "0MB",
  imageLimit: 10,
};

interface ProductFormProps {
  initialData?: Record<string, any>; // Or a more specific product type
  onSubmit: (data: Record<string, any>) => void; // Or a more specific product type
  isLoading?: boolean; // To disable form while submitting/loading
}

export function ProductForm({
  initialData,
  onSubmit,
  isLoading,
}: ProductFormProps) {
  const form = useForm({
    defaultValues: initialData || {},
    // resolver: zodResolver(yourProductSchema), // Add your Zod schema for validation
  });
  return (
    <Form {...form}>
      {/* Main form grid: 2/3 for primary content, 1/3 for secondary/AI tools */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          <ProductDetails isExpanded={true} />
          <ProductVariants />
          <ProductMedia stats={dummyMediaStats} />
          <ProductFeatures />
          <ProductPromotionsDiscounts />
          <ProductReturnPolicy />{" "}
          {/* Moved Return Policy to left for balance if needed */}
        </div>

        {/* Right Column (Secondary/AI Tools) */}
        <div className="md:col-span-1 space-y-6">
          <ProductAiGenerator />
          <ProductStatusVisibility />
          <ProductSeoMeta />
          <ProductShipping />
        </div>
      </form>
    </Form>
  );
}

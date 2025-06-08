"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProductDetails,
  ProductFeatures,
  ProductMedia,
  ProductVariants,
} from "./sections";

export function ProductForm() {
  const form = useForm({
    defaultValues: {},
  });
  return (
    <Form {...form}>
      <form className="space-y-4">
        <ProductDetails isExpanded={true} />
        <ProductVariants />
        <ProductMedia />
        <ProductFeatures />
      </form>
    </Form>
  );
}

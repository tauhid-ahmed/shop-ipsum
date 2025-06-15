"use client";

import { TextArea } from "@/components/text-area";
import { TextField } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormContext } from "react-hook-form";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";

const { productSeoMeta } = productFormSections;

// A placeholder base URL for your store, this could come from a config
const STORE_BASE_URL = "https://yourstore.com";

export default function ProductSeoMeta() {
  const { watch } = useFormContext(); // Ensure FormProvider is used in ProductForm

  const seoTitle = watch(
    "seoMetaTitle",
    "Your Product Title - Up to 60 characters"
  );
  const seoDescription = watch(
    "seoMetaDescription",
    "Compelling description of your product, ideally 150-160 characters, to encourage clicks from search results."
  );
  const seoSlug = watch("seoProductSlug", "your-product-slug");

  return (
    <ProductFormCard
      title={productSeoMeta.title}
      description={productSeoMeta.description}
      icon={<productSeoMeta.icon className="text-teal-500" />} // Example color
    >
      {/* Changed to a single column layout for inputs and preview */}
      <fieldset className="space-y-6">
        <div className="space-y-6">
          <TextField
            name="seoMetaTitle"
            label="Meta Title"
            placeholder="Enter meta title"
            maxLength={70} // Common recommendation
          />
          <TextArea
            name="seoMetaDescription"
            label="Meta Description"
            placeholder="Enter meta description"
            rows={5}
            maxLength={160} // Common recommendation
          />
          <TextField
            name="seoProductSlug"
            label="SEO URL Slug"
            placeholder="product-name-slug"
          />
          <TextField
            name="seoMetaKeywords"
            label="Meta Keywords (Optional)"
            placeholder="keyword1, keyword2, keyword3"
            helperText="Comma-separated keywords. Less critical for modern SEO but can be used."
          />
        </div>

        {/* Preview Card now flows below the inputs */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Search Engine Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border border-border rounded-md space-y-1 bg-background shadow-sm">
                <h3 className="text-blue-600 text-lg truncate hover:underline cursor-pointer">
                  {seoTitle || "Meta Title Preview"}
                </h3>
                <p className="text-green-700 text-sm truncate">
                  {`${STORE_BASE_URL}/${seoSlug || "your-product-slug"}`}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {seoDescription ||
                    "This is a preview of how your product might appear in search engine results. Optimize your meta description."}
                </p>
              </div>
              <CardDescription className="mt-2 text-xs">
                This is a simulation. Actual appearance may vary by search
                engine.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </fieldset>
    </ProductFormCard>
  );
}

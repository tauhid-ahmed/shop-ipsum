import { SelectField } from "@/components";
import { type InputSelectProps } from "@/components/select-field";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideRefreshCcw } from "lucide-react";
import ActionButton from "../action-button";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const { productDetails } = productFormSections;

// Example: These should come from a config, API, or form state
const departmentOptions = [
  { label: "Electronics", value: "electronics" },
  { label: "Books", value: "books" },
];
const categoryOptions = (department?: string) => {
  // Example: categories could depend on department
  if (department === "electronics")
    return [
      { label: "Mobiles", value: "mobiles" },
      { label: "Laptops", value: "laptops" },
    ];
  return [{ label: "Fiction", value: "fiction" }];
};
export default function ProductDetails({
  isExpanded,
}: {
  isExpanded?: boolean;
}) {
  return (
    <>
      <ProductFormCard
        title={productDetails.title}
        description={productDetails.description}
        icon={<productDetails.icon className="text-violet-500" />}
        isExpanded={isExpanded}
      >
        <fieldset className="flex flex-col gap-6">
          <TextField name="product-title" label="Product Title" required />
          <div className="flex items-end gap-2 flex-1">
            <TextField
              className="w-full"
              name="product-slug"
              label="URL Slug"
            />
            <ActionButton size="icon">
              <LucideRefreshCcw />
            </ActionButton>
          </div>
          <TextField name="product-brand" label="Brand" />
          <TextArea
            label="Short Description"
            name="short-description"
            placeholder="Short description"
          />
          <TextArea
            label="Detailed Description"
            name="description"
            placeholder="Description"
            rows={10}
            className="min-h-32"
          />

          <ProductCategoriesSection />
          <ProductTags />
        </fieldset>
      </ProductFormCard>
    </>
  );
}

function ProductCategoriesSection() {
  // State to hold the selected department value
  const [selectedDepartment, setSelectedDepartment] = useState<
    string | undefined
  >(departmentOptions[0]?.value);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-amber-500">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 [&>*]:flex-1 [&>*]:basis-52">
          <SelectField
            // options should be dynamic, e.g., from props or state
            options={departmentOptions}
            label="Departments"
            name="department"
            // When department changes, update selectedDepartment state
            // Note: The actual `onChange` for `SelectField` would need to be connected
            // to react-hook-form or a local handler that calls setSelectedDepartment.
            // For react-hook-form, you'd typically use `watch` or `control.getValues()`
            // and a `useEffect` to update `selectedDepartment`.
            // For simplicity here, we'll assume a direct way to set it or it's handled by the form.
          />
          <SelectField
            options={categoryOptions(selectedDepartment)} // Use state to get dynamic options
            label="Category"
            name="category"
          />
          <SelectField
            options={[{ label: "Smartphones", value: "smartphones" }]} // Example: Subcategories could depend on category
            label="Subcategory"
            name="subcategory"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function ProductTags() {
  // Example: Current tags should ideally come from form state
  const [currentTags, setCurrentTags] = useState<string[]>(["# Trending"]); // Manage with form state
  const suggestedTagLabels = [
    // Could be props or from a config
    "Trending",
    "Featured",
    "New Arrival",
    "Eco Friendly",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sky-500">Product Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 items-end">
          <TextField
            className="w-full"
            name="tag"
            placeholder="Add Tags"
            label="Add Tags"
          />
          <ActionButton>+ Add</ActionButton>
        </div>
        <span className="text-xs text-muted-foreground mt-1 mb-4 block">
          Tags help customers discover your product through search and filtering
        </span>
        <div className="mt-6">
          {/* Removed leading space */}
          <span className="text-sm">Current Tags ({currentTags.length})</span>
          <span className="flex gap-2 mt-2 flex-wrap">
            {currentTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full text-muted-foreground"
                // onClick={() => handleRemoveCurrentTag(tag)} // Add functionality
              >
                {tag}
              </Badge>
            ))}
          </span>
        </div>
        <div className="mt-6">
          <span className="text-sm">
            {/* Removed leading space */}
            Suggest Tags ({suggestedTagLabels.length})
          </span>
          <span className="flex gap-2 mt-2 flex-wrap">
            {suggestedTagLabels.map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="rounded-full text-muted-foreground cursor-pointer hover:bg-accent"
                // onClick={() => handleAddTag(label)} // Add functionality
              >
                + {label}
              </Badge>
            ))}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

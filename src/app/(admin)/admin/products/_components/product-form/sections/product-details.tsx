import { SelectField } from "@/components";
import { type InputSelectProps } from "@/components/select-field";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components/text-field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideRefreshCcw } from "lucide-react";
import ActionButton from "../action-button";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import { Badge } from "@/components/ui/badge";

const { productDetails } = productFormSections;

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
              name={"product-title"}
              label="URL Slug"
            />
            <ActionButton size="icon">
              <LucideRefreshCcw />
            </ActionButton>
          </div>
          <TextField name={"product-title"} label="Brand" />
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

          <DiscountAndPolicy />
          <ProductTags />
        </fieldset>
      </ProductFormCard>
    </>
  );
}

function ProductCategories({ ...props }: InputSelectProps) {
  return <SelectField {...props} />;
}

function DiscountAndPolicy() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-amber-500">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 [&>*]:flex-1 [&>*]:basis-52">
          <ProductCategories
            options={[{ label: "Apple Inc", value: "apple-inc" }]}
            label="Departments"
            name="department"
          />
          <ProductCategories
            options={[{ label: "Apple Inc", value: "apple-inc" }]}
            label="Category"
            name="category"
          />
          <ProductCategories
            options={[{ label: "Apple Inc", value: "apple-inc" }]}
            label="Subcategory"
            name="subcategory"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function ProductTags() {
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
        <span className=" text-xs bottom-0">
          Tags help customers discover your product through search and filtering
        </span>
        <div className="mt-6">
          <span className="text-sm"> Current Tags (1)</span>
          <span className="flex gap-2 mt-2">
            <Badge
              variant="outline"
              className="rounded-full text-muted-foreground"
            >
              # Trending
            </Badge>
          </span>
        </div>
        <div className="mt-6">
          <span className="text-sm"> Suggest Tags (4)</span>
          <span className="flex gap-2 mt-2">
            <Badge
              variant="outline"
              className="rounded-full text-muted-foreground"
            >
              + Trending
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full text-muted-foreground"
            >
              + Featured
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full text-muted-foreground"
            >
              + New Arrival
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full text-muted-foreground"
            >
              + Eco Friendly
            </Badge>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

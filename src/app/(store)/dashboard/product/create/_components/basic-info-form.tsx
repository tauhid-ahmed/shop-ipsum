import { TextArea } from "@/components/text-area";
import { TextField } from "@/components/text-field";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CreateProductVariants } from "./create-product-variants";

export function BasicInfoForm() {
  const [newFeature, setNewFeature] = useState("");
  const form = useForm({
    defaultValues: {
      product_title: "",
      short_description: "",
      long_description: "",
      product_slug: "",
      variants: [
        {
          color: "",
          size: "",
          size_type: "",
          selling_price: "",
          origin_price: "",
          stock_quantity: "",
          base_price: "",
        },
      ],
    },
  });
  const { append, remove } = useFieldArray({
    control: form.control,
    name: "variants",
  });

  const addVariant = () =>
    append({
      color: "",
      size: "",
      size_type: "",
      selling_price: "",
      origin_price: "",
      stock_quantity: "",
      base_price: "",
    });

  const deleteVariant = (index: number) => remove(index);

  return (
    <Form {...form}>
      <div className="space-y-6">
        <fieldset>BasicInfoForm</fieldset>
        <div className="flex gap-4">
          <div className="flex-1">
            <TextField name="product_title" type="text" label="Product Title" />
          </div>
          <div className="flex-1">
            <TextField name="product_slug" type="text" label="Product Slug" />
          </div>
        </div>
        <CreateProductVariants
          variants={form.getValues("variants")}
          onAddVariant={addVariant}
          onDeleteVariant={deleteVariant}
        />
        <TextArea
          name="short_description"
          type="text"
          label="Short Description"
        />
        <TextArea
          name="long_description"
          type="text"
          label="Long Description"
        />
      </div>
    </Form>
  );
}

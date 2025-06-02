import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function BasicInfoForm() {
  const [newFeature, setNewFeature] = useState("");
  const form = useForm({
    defaultValues: {
      product_title: "",
      short_description: "",
      long_description: "",
      features: [],
    },
  });

  const addFeature = () => {
    if (newFeature.trim() === "") return;
    const currentFeatures = form.getValues("features");
    const nextFeatures = [...currentFeatures, newFeature];
    form.setValue("features", nextFeatures);
    setNewFeature("");
  };
  const removeFeature = (index: number) => {
    const currentFeatures = form.getValues("features");
    const nextFeatures = currentFeatures.filter((_, i) => i !== index);
    form.setValue("features", [...nextFeatures]);
  };

  return (
    <Form {...form}>
      <div className="space-y-6">
        <fieldset>BasicInfoForm</fieldset>
        <TextField name="product_title" type="text" label="Product Title" />
        <TextField
          name="short_description"
          type="text"
          label="Short Description"
        />
        <TextField
          name="long_description"
          type="text"
          label="Long Description"
        />
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <Label>Features:</Label>
            <Input
              className="mt-2"
              name="features"
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addFeature()}
            />
          </div>
          <Button onClick={addFeature} type="button">
            + Add Feature
          </Button>
        </div>
        {form.watch("features").map((feature, index) => (
          <span
            key={index}
            onClick={() => removeFeature(index)}
            className="inline-block px-2"
          >
            {feature}
          </span>
        ))}
      </div>
    </Form>
  );
}

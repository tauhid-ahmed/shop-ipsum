import { ProductFormCard } from "../ui/product-form-card";
import { productFormSections } from "../form-sections.config";
import ActionButton from "../action-button";
import { TextField } from "@/components";
import { LucideX } from "lucide-react";
import { useState } from "react"; // Or useFieldArray from react-hook-form

const { productFeatures } = productFormSections;

interface Feature {
  id: string;
  text: string;
}

export default function ProductFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [newFeatureText, setNewFeatureText] = useState("");

  const handleAddFeature = () => {
    if (newFeatureText.trim() === "") return;
    setFeatures([
      ...features,
      { id: `feature-${Date.now()}`, text: newFeatureText },
    ]);
    setNewFeatureText(""); // Clear input
  };

  const handleRemoveFeature = (id: string) => {
    setFeatures(features.filter((feature) => feature.id !== id));
  };

  return (
    <ProductFormCard
      title={productFeatures.title}
      description={productFeatures.description}
      icon={<productFeatures.icon className="text-emerald-500" />}
    >
      <fieldset className="space-y-4">
        {features.map((feature, index) => (
          <div key={feature.id} className="flex gap-2 items-center">
            <TextField
              className="w-full"
              name={`feature_${index}`} // Ensure unique name for form integration
              value={feature.text}
              // onChange={(e) => updateFeatureText(feature.id, e.target.value)} // If features are editable
              readOnly // Or make it editable
              placeholder="Product feature"
            />
            <ActionButton
              variant="ghost"
              size="icon"
              className="hover:text-destructive active:text-destructive"
              onClick={() => handleRemoveFeature(feature.id)}
            >
              <LucideX />
            </ActionButton>
          </div>
        ))}
        <div className="flex gap-2 items-end pt-2">
          {" "}
          {/* Add some space before the add input */}
          <TextField
            className="w-full"
            name="new_feature" // Name for the new feature input
            placeholder="Type a new feature"
            value={newFeatureText}
            onChange={(e) => setNewFeatureText(e.target.value)}
          />
        </div>
        <ActionButton
          variant="ghost"
          className="w-full border border-emerald-500 border-dotted"
          onClick={handleAddFeature}
        >
          + Add Features
        </ActionButton>
      </fieldset>
    </ProductFormCard>
  );
}

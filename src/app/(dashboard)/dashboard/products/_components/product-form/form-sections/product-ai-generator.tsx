"use client";

import { Button } from "@/components/ui/button";
import { productFormSections } from "../form-sections.config";
import { ProductFormCard } from "../ui/product-form-card";
import { LucideSparkles, LucideWand2 } from "lucide-react"; // Example icons

const { productAiGenerator } = productFormSections;

export default function ProductAiGenerator() {
  // const { setValue } = useFormContext(); // To potentially set form values

  const handleGenerateDescription = () => {
    console.log("AI: Generating product description...");
    // Example: setValue("description", "AI generated description...");
    // Add animation or loading state here
  };

  const handleSuggestSeo = () => {
    console.log("AI: Suggesting SEO metadata...");
    // Example: setValue("seoMetaTitle", "AI Suggested SEO Title");
    // Add animation or loading state here
  };

  const AiActionButton = ({
    onClick,
    children,
    icon,
    className,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
  }) => (
    <Button
      type="button"
      onClick={onClick}
      className={`
        w-full justify-center text-white font-semibold
        bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
        hover:from-purple-600 hover:via-pink-600 hover:to-orange-600
        focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800
        shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80
        transition-all duration-300 ease-in-out transform hover:scale-105
        rounded-lg px-5 py-3 text-center flex items-center gap-2
        ${className}
      `}
    >
      {icon}
      {children}
    </Button>
  );

  return (
    <ProductFormCard
      title={productAiGenerator.title}
      description={productAiGenerator.description}
      icon={<productAiGenerator.icon className="text-pink-500" />}
    >
      <div className="space-y-4 p-2">
        <AiActionButton
          onClick={handleGenerateDescription}
          icon={<LucideWand2 size={18} />}
        >
          Generate Description
        </AiActionButton>
        <AiActionButton
          onClick={handleSuggestSeo}
          icon={<LucideSparkles size={18} />}
        >
          Suggest SEO Meta
        </AiActionButton>
        {/* Add more AI action buttons as needed */}
      </div>
    </ProductFormCard>
  );
}

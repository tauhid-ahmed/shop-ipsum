import type { LucideIcon } from "lucide-react";
import {
  Box,
  Settings,
  Image,
  Tag,
  RotateCw,
  Search,
  Truck,
  Layers,
  Sparkles, // Or your chosen icon for AI Generator
  Eye, // Example icon for Status & Visibility
} from "lucide-react";

export type SectionConfigData = Record<
  string,
  {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }
>;

export const productFormSections: SectionConfigData = {
  productDetails: {
    id: "productDetails",
    title: "Product Details",
    description: "Essential product information and categorization",
    icon: Box,
  },
  productFeatures: {
    id: "productFeatures",
    title: "Features",
    description: "Add product features that distinguish it from others.",
    icon: Settings,
  },
  productMedia: {
    id: "productMedia",
    title: "Media",
    description: "Add high-quality images or videos showcasing the product.",
    icon: Image,
  },
  productPromotionDiscounts: {
    id: "productPromotionDiscounts",
    title: "Promotions & Discounts",
    description: "Manage discounts, offers, and promotional pricing.",
    icon: Tag,
  },
  productReturnPolicy: {
    id: "productReturnPolicy",
    title: "Return Policy",
    description:
      "Specify the conditions under which product returns are accepted.",
    icon: RotateCw,
  },
  productSeoMeta: {
    id: "productSeoMeta",
    title: "SEO & Metadata",
    description: "Add meta title, keywords, and descriptions to improve SEO.",
    icon: Search,
  },
  productShipping: {
    id: "productShipping",
    title: "Shipping",
    description: "Set shipping methods, costs, and delivery times.",
    icon: Truck,
  },
  productVariants: {
    id: "productVariants",
    title: "Variants",
    description:
      "Add multiple variations of the product with different attributes.",
    icon: Layers,
  },
  productAiGenerator: {
    // Add this entry if it's missing
    id: "productAiGenerator",
    title: "AI Content Assistant",
    description: "Generate or enhance product content using AI.",
    icon: Sparkles, // Ensure this icon is imported and used correctly
  },
  productStatusVisibility: {
    id: "productStatusVisibility",
    title: "Status & Visibility",
    description: "Manage product status, visibility, and publishing schedule.",
    icon: Eye, // Or your chosen icon
  },
};

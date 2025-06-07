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
} from "lucide-react";

export interface SectionConfig {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  isOptional?: boolean;
  order: number;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  icon?: LucideIcon;
}

export const productFormSections: SectionConfig[] = [
  {
    id: "productDetails",
    title: "Product Details",
    subtitle: "Basic information about the product",
    description: "Enter the product name, description, and brand information.",
    isOptional: false,
    order: 1,
    collapsible: true,
    defaultExpanded: true,
    icon: Box,
  },
  {
    id: "productFeatures",
    title: "Features",
    subtitle: "Highlight key features and specifications",
    description: "Add product features that distinguish it from others.",
    isOptional: true,
    order: 2,
    collapsible: true,
    defaultExpanded: false,
    icon: Settings,
  },
  {
    id: "productMedia",
    title: "Media",
    subtitle: "Upload product images and videos",
    description: "Add high-quality images or videos showcasing the product.",
    isOptional: false,
    order: 3,
    collapsible: true,
    defaultExpanded: false,
    icon: Image,
  },
  {
    id: "productPromotionDiscounts",
    title: "Promotions & Discounts",
    subtitle: "Set pricing promotions and discounts",
    description: "Manage discounts, offers, and promotional pricing.",
    isOptional: true,
    order: 4,
    collapsible: true,
    defaultExpanded: false,
    icon: Tag,
  },
  {
    id: "productReturnPolicy",
    title: "Return Policy",
    subtitle: "Define the product return terms",
    description:
      "Specify the conditions under which product returns are accepted.",
    isOptional: true,
    order: 5,
    collapsible: true,
    defaultExpanded: false,
    icon: RotateCw,
  },
  {
    id: "productSeoMeta",
    title: "SEO & Metadata",
    subtitle: "Optimize product metadata for search engines",
    description: "Add meta title, keywords, and descriptions to improve SEO.",
    isOptional: true,
    order: 6,
    collapsible: true,
    defaultExpanded: false,
    icon: Search,
  },
  {
    id: "productShipping",
    title: "Shipping",
    subtitle: "Configure shipping options and rates",
    description: "Set shipping methods, costs, and delivery times.",
    isOptional: true,
    order: 7,
    collapsible: true,
    defaultExpanded: false,
    icon: Truck,
  },
  {
    id: "productVariants",
    title: "Variants",
    subtitle: "Manage product variants like size, color, etc.",
    description:
      "Add multiple variations of the product with different attributes.",
    isOptional: false,
    order: 8,
    collapsible: true,
    defaultExpanded: true,
    icon: Layers,
  },
] as const;

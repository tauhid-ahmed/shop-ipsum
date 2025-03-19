import { Heading } from "@/components/heading";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { LucideCircle } from "lucide-react";
import React from "react";

type ProductVariantsProps = {
  value: string;
  onChange: (value: string) => void;
  title: string;
};

const data = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

export function ProductSizeVariants({ title = "Size" }: { title?: string }) {
  const [value, setValue] = React.useState("L");
  return (
    <div className="">
      <Heading align="left">{title}</Heading>
      <RadioGroupPrimitive.Root
        value={value}
        onValueChange={setValue}
        className="flex flex-wrap gap-1 md:gap-2 text-center"
      >
        {data.map((item) => (
          <RadioGroupPrimitive.Item
            className="rounded py-2 text-xs w-10 lg:text-sm lg:w-12 border border-border data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary cursor-pointer font-medium"
            key={item}
            value={item}
          >
            {item}
          </RadioGroupPrimitive.Item>
        ))}
      </RadioGroupPrimitive.Root>
    </div>
  );
}

/**
 * Color options for product variants
 */
const colors = [
  "black",
  "white",
  "blue",
  "red",
  "green",
  "yellow",
  "orange",
] as const;

/**
 * Maps color names to Tailwind CSS classes
 */
const colorData: Record<(typeof colors)[number], string> = {
  black: "bg-black",
  white: "bg-gray-300",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-400",
  orange: "bg-orange-500",
};

/**
 * Border color mapping for selected color variants
 */
const borderColorMap: Record<(typeof colors)[number], string> = {
  black: "border-black",
  white: "border-gray-300",
  blue: "border-blue-500",
  red: "border-red-500",
  green: "border-green-500",
  yellow: "border-yellow-400",
  orange: "border-orange-500",
};

interface ProductColorVariantsProps {
  /** Optional title for the color selector */
  title?: string;
  /** Optional default selected color */
  defaultColor?: (typeof colors)[number];
  /** Optional callback when color changes */
  onColorChange?: (color: (typeof colors)[number]) => void;
}

/**
 * ProductColorVariants component displays a color selector for product variants
 */
export function ProductColorVariants({
  title = "Color",
  defaultColor = "red",
  onColorChange,
}: ProductColorVariantsProps) {
  const [selectedColor, setSelectedColor] =
    React.useState<(typeof colors)[number]>(defaultColor);

  const handleColorChange = (color: string) => {
    const typedColor = color as (typeof colors)[number];
    setSelectedColor(typedColor);
    onColorChange?.(typedColor);
  };

  return (
    <div className="product-color-variants">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <RadioGroupPrimitive.Root
        value={selectedColor}
        onValueChange={handleColorChange}
        className="flex flex-wrap gap-1 md:gap-2"
      >
        {colors.map((color) => (
          <RadioGroupPrimitive.Item
            key={color}
            value={color}
            aria-label={`Select ${color} color`}
            className={cn(
              "relative flex flex-wrap items-center justify-center rounded-full size-8 lg:size-10 border-2 cursor-pointer transition-all opacity-100",
              "focus:outline-none",
              selectedColor === color
                ? borderColorMap[color]
                : "border-gray-200 border-2 opacity-60"
            )}
          >
            {/* Inner Color Swatch */}
            <div
              className={cn(
                "absolute inset-0.5 rounded-full",
                colorData[color]
              )}
            />

            {/* Visually hidden label for screen readers */}
            <span className="sr-only">{color}</span>
          </RadioGroupPrimitive.Item>
        ))}
      </RadioGroupPrimitive.Root>
    </div>
  );
}

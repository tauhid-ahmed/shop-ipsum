import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

type ProductSizeVariantsProps = {
  value?: string;
  onChange?: (value: string) => void;
  title?: string;
  className?: string;
};

const data = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

export function ProductSizeVariants({
  title = "Size",
  className,
}: ProductSizeVariantsProps) {
  const [value, setValue] = React.useState("L");
  return (
    <div className={cn("space-y-1", className)}>
      <Heading size="md" as="h3">
        {title}
      </Heading>
      <RadioGroupPrimitive.Root
        value={value}
        onValueChange={setValue}
        className="flex flex-wrap gap-2 text-center"
      >
        {data.map((item) => (
          <RadioGroupPrimitive.Item
            className="rounded py-2 sm:py-2.5 text-xs w-10 lg:text-sm lg:w-12 border border-border data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary cursor-pointer font-medium"
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
 * Maps color names to Tailwind CSS classes that work in both light and dark modes
 */
const colorData: Record<(typeof colors)[number], string> = {
  black: "bg-black dark:bg-black",
  white: "bg-gray-200 dark:bg-gray-100",
  blue: "bg-blue-500 dark:bg-blue-600",
  red: "bg-red-500 dark:bg-red-600",
  green: "bg-green-500 dark:bg-green-600",
  yellow: "bg-yellow-400 dark:bg-yellow-500",
  orange: "bg-orange-500 dark:bg-orange-600",
};

/**
 * Border color mapping for selected color variants that works in both light and dark modes
 */
const borderColorMap: Record<(typeof colors)[number], string> = {
  black: "border-black dark:border-black",
  white: "border-gray-200 dark:border-gray-100",
  blue: "border-blue-500 dark:border-blue-600",
  red: "border-red-500 dark:border-red-600",
  green: "border-green-500 dark:border-green-600",
  yellow: "border-yellow-400 dark:border-yellow-500",
  orange: "border-orange-500 dark:border-orange-600",
};

/**
 * Border color mapping for selected color variants
 */

interface ProductColorVariantsProps {
  /** Optional title for the color selector */
  title?: string;
  /** Optional default selected color */
  defaultColor?: (typeof colors)[number];
  /** Optional callback when color changes */
  onColorChange?: (color: (typeof colors)[number]) => void;
  className?: string;
}

/**
 * ProductColorVariants component displays a color selector for product variants
 */
export function ProductColorVariants({
  title = "Color",
  defaultColor = "red",
  onColorChange,
  className,
}: ProductColorVariantsProps) {
  const [selectedColor, setSelectedColor] =
    React.useState<(typeof colors)[number]>(defaultColor);

  const handleColorChange = (color: string) => {
    const typedColor = color as (typeof colors)[number];
    setSelectedColor(typedColor);
    onColorChange?.(typedColor);
  };

  return (
    <div className={cn("space-y-1", className)}>
      <Heading size="md" as="h3">
        {title}
      </Heading>
      <RadioGroupPrimitive.Root
        value={selectedColor}
        onValueChange={handleColorChange}
        className="flex flex-wrap gap-3"
      >
        {colors.map((color) => (
          <RadioGroupPrimitive.Item
            key={color}
            value={color}
            aria-label={`Select ${color} color`}
            className={cn(
              "relative flex flex-wrap items-center justify-center rounded-full border-2 cursor-pointer transition-all",
              "focus:outline-none size-9 lg:size-10 focus:backdrop-blur-3xl",
              selectedColor === color
                ? `${borderColorMap[color]} ring-2 ring-primary`
                : "border-border border-2"
            )}
          >
            {/* Inner Color Swatch */}
            <div
              className={cn(
                "absolute inset-0.75 rounded-full",
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

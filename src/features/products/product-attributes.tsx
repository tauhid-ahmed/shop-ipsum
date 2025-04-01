import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

type ProductAttributesProps = {
  attributes: string[];
  availableAttributes: string[];
  valueChange: (attribute: string) => void;
  value: string;
};

export function ProductAttributes({
  attributes = [],
  availableAttributes,
  valueChange,
  value,
}: ProductAttributesProps) {
  return (
    <RadioGroupPrimitive.Root
      value={value}
      onValueChange={valueChange}
      className="flex flex-wrap gap-3 lg:gap-4 text-center"
    >
      {attributes.map((attribute) => (
        <RadioGroupPrimitive.Item
          className="disabled:pointer-events-none disabled:ring-1 disabled:ring-muted-foreground/50 border border-secondary hover:ring-1 ring-primary transition-colors px-2 lg:px-4 py-1.5 lg:py-3 bg-secondary/70 data-[state=checked]:ring-2 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary cursor-pointer rounded text-sm min-w-14 lg:min-w-16 flex items-center justify-center relative disabled:before:absolute disabled:before:-inset-x-0.5 disabled:before:h-0.5 disabled:before:bg-foreground/50 disabled:before:-rotate-[25deg] disabled:before:-z-10 disabled:opacity-20 overflow-hidden focus:outline-primary"
          key={attribute}
          value={attribute}
          disabled={!availableAttributes.includes(attribute)}
        >
          {attribute}
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}

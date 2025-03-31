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
      className="flex flex-wrap gap-2 text-center"
    >
      {attributes.map((attribute) => (
        <RadioGroupPrimitive.Item
          className="disabled:pointer-events-none disabled:ring-1 disabled:ring-muted-foreground/50 border border-secondary hover:ring-1 ring-primary transition-all px-2 py-1 bg-secondary/70 data-[state=checked]:ring-2 data-[state=checked]:text-foreground cursor-pointer rounded-full text-sm min-w-12 flex items-center justify-center relative disabled:before:absolute disabled:before:-inset-x-0.5 disabled:before:h-0.5 disabled:before:bg-foreground/50 disabled:before:rotate-[135deg] disabled:before:-z-10 overflow-hidden"
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

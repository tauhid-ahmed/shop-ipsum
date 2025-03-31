import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

type ProductAttributesProps = {
  attributes: string[];
  availableAttributes: string[],
  valueChange: (attribute: string) => void;
  value: string
};

export function ProductAttributes({
  attributes = [],
  availableAttributes,
  valueChange,
  value
}:
ProductAttributesProps) {
  return (
    <RadioGroupPrimitive.Root
      value={value}
      onValueChange={valueChange}
      className="flex flex-wrap gap-2 text-center"
    >
      {attributes.map((attribute) => (
        <RadioGroupPrimitive.Item
          className="rounded disabled:opacity-50 disabled:border-red-500 py-2 sm:py-2.5 text-xs w-10 lg:text-sm lg:w-12 border border-border data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary cursor-pointer font-medium"
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

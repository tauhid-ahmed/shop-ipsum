import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

type ProductAttributesProps = {
  attributes: string[];
  selectedAttribute: string;
  onAttributeChange: (attribute: string) => void;
};

export function ProductAttributes({
  attributes = [],
  selectedAttribute,
  onAttributeChange,
}: ProductAttributesProps) {
  return (
    <RadioGroupPrimitive.Root
      // value={selectedAttribute}
      // onValueChange={onAttributeChange}
      className="flex flex-wrap gap-2 text-center"
      // disabled={disabled}
    >
      {attributes.map(({ name, isAvailable }) => (
        <RadioGroupPrimitive.Item
          className="rounded py-2 sm:py-2.5 text-xs w-10 lg:text-sm lg:w-12 border border-border data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary cursor-pointer font-medium"
          key={name}
          value={name}
        >
          {name}
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}

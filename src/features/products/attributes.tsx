"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define types for our data and props
interface ProductVariant {
  id: number;
  color: string;
  size: string;
  inStock: boolean;
}

interface AttributeButtonProps {
  option: string;
  isSelected: boolean;
  isAvailable: boolean;
  onSelect: (option: string) => void;
}

interface AttributeSelectorProps {
  attributeName: string;
  allOptions: string[];
  availableOptions: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

// Sample product variants data
const productVariants: ProductVariant[] = [
  { id: 1, color: "Red", size: "Small", inStock: true },
  { id: 2, color: "Red", size: "Medium", inStock: true },
  { id: 3, color: "Red", size: "Large", inStock: false },
  { id: 4, color: "Blue", size: "Small", inStock: false },
  { id: 5, color: "Blue", size: "Medium", inStock: true },
  { id: 6, color: "Blue", size: "Large", inStock: true },
  { id: 7, color: "Green", size: "Small", inStock: true },
  { id: 8, color: "Green", size: "Medium", inStock: false },
  { id: 9, color: "Green", size: "Large", inStock: true },
  { id: 9, color: "Green", size: "2XL", inStock: true },
];

// Button component for individual attribute options
const AttributeButton: React.FC<AttributeButtonProps> = ({
  option,
  isSelected,
  isAvailable,
  onSelect,
}) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      size="sm"
      className={`m-1 ${!isAvailable ? "opacity-5" : ""}`}
      onClick={() => isAvailable && onSelect(option)}
      disabled={!isAvailable}
    >
      {option}
    </Button>
  );
};

// Selector component with buttons
const AttributeSelector: React.FC<AttributeSelectorProps> = ({
  attributeName,
  allOptions,
  availableOptions,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="attribute-selector mb-4">
      <h3 className="text-sm font-medium mb-2">{attributeName}</h3>
      <div className="flex flex-wrap">
        {allOptions.map((option) => (
          <AttributeButton
            key={option}
            option={option}
            isSelected={selectedOption === option}
            isAvailable={availableOptions.includes(option)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

const ProductSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [allColors, setAllColors] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);

  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );

  // Initialize all possible options
  useEffect(() => {
    const colors = [...new Set(productVariants.map((v) => v.color))];
    const sizes = [...new Set(productVariants.map((v) => v.size))];

    setAllColors(colors);
    setAllSizes(sizes);

    // Initially, only show options that have in-stock variants
    const inStockColors = [
      ...new Set(productVariants.filter((v) => v.inStock).map((v) => v.color)),
    ];

    const inStockSizes = [
      ...new Set(productVariants.filter((v) => v.inStock).map((v) => v.size)),
    ];

    setAvailableColors(inStockColors);
    setAvailableSizes(inStockSizes);
  }, []);

  // Update available sizes when color changes
  useEffect(() => {
    if (selectedColor) {
      const sizesForColor = [
        ...new Set(
          productVariants
            .filter((v) => v.color === selectedColor && v.inStock)
            .map((v) => v.size)
        ),
      ];
      setAvailableSizes(sizesForColor);
    } else {
      // Reset to all available sizes
      const inStockSizes = [
        ...new Set(productVariants.filter((v) => v.inStock).map((v) => v.size)),
      ];
      setAvailableSizes(inStockSizes);
    }

    updateSelectedVariant();
  }, [selectedColor]);

  // Update available colors when size changes
  useEffect(() => {
    if (selectedSize) {
      const colorsForSize = [
        ...new Set(
          productVariants
            .filter((v) => v.size === selectedSize && v.inStock)
            .map((v) => v.color)
        ),
      ];
      setAvailableColors(colorsForSize);
    } else {
      // Reset to all available colors
      const inStockColors = [
        ...new Set(
          productVariants.filter((v) => v.inStock).map((v) => v.color)
        ),
      ];
      setAvailableColors(inStockColors);
    }

    updateSelectedVariant();
  }, [selectedSize]);

  // Find the selected variant
  const updateSelectedVariant = (): void => {
    if (selectedColor && selectedSize) {
      const variant = productVariants.find(
        (v) => v.color === selectedColor && v.size === selectedSize && v.inStock
      );
      setSelectedVariant(variant || null);
    } else {
      setSelectedVariant(null);
    }
  };

  // Handle color selection
  const handleColorSelect = (color: string): void => {
    if (color === selectedColor) {
      // Deselect
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  // Handle size selection
  const handleSizeSelect = (size: string): void => {
    if (size === selectedSize) {
      // Deselect
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  // Handle adding to cart
  const handleAddToCart = (): void => {
    if (selectedVariant) {
      console.log("Added to cart:", selectedVariant);
      // Implement your cart logic here
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Product Options</CardTitle>
      </CardHeader>
      <CardContent>
        <AttributeSelector
          attributeName="Color"
          allOptions={allColors}
          availableOptions={availableColors}
          selectedOption={selectedColor}
          onSelect={handleColorSelect}
        />

        <AttributeSelector
          attributeName="Size"
          allOptions={allSizes}
          availableOptions={availableSizes}
          selectedOption={selectedSize}
          onSelect={handleSizeSelect}
        />
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4">
        {selectedVariant ? (
          <div className="w-full">
            <div className="mb-4 p-4 border rounded bg-secondary">
              <h3 className="font-medium mb-2">Selected Variant</h3>
              <p>
                Color:{" "}
                <span className="font-medium">{selectedVariant.color}</span>
              </p>
              <p>
                Size:{" "}
                <span className="font-medium">{selectedVariant.size}</span>
              </p>
            </div>
            <Button className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        ) : (
          <div className="text-center w-full text-gray-500">
            <p>Please select color and size to continue</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductSelector;

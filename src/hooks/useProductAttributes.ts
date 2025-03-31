"use client";
import { useState, useEffect } from "react";
import { ProductType } from "../data/products";

const mediator = (data: string[]): number => Math.floor(data.length / 2);

export const useProductAttributes = (product: ProductType) => {
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    const allAttributes = {
      allColors: new Set<string>(),
      allSizes: new Set<string>(),
      availableColors: new Set<string>(),
      availableSizes: new Set<string>(),
    };

    product.inventory.variants.forEach((variant) => {
      allAttributes.allColors.add(variant.color);
      variant.sizes.forEach((size) => allAttributes.allSizes.add(size));
      if (variant.stockQuantity > 0) {
        allAttributes.availableColors.add(variant.color);
        variant.sizes.forEach((size) => {
          if (variant.sizeStock[size] > 0) {
            allAttributes.availableSizes.add(size);
          }
        });
      }
    });

    setAllColors(Array.from(allAttributes.allColors));
    setAllSizes(Array.from(allAttributes.allSizes));
    setAvailableColors(Array.from(allAttributes.availableColors));
    setAvailableSizes(Array.from(allAttributes.availableSizes));
    setSelectedColor(
      Array.from(allAttributes.availableColors)[
        mediator(Array.from(allAttributes.availableColors))
      ]
    );
    setSelectedSize(
      Array.from(allAttributes.availableSizes)[
        mediator(Array.from(allAttributes.availableSizes))
      ]
    );
  }, []);

  useEffect(() => {
    const allAttributes = {
      allColors: new Set<string>(),
      allSizes: new Set<string>(),
      availableColors: new Set<string>(),
      availableSizes: new Set<string>(),
    };

    if (!selectedColor) {
      product.inventory.variants.forEach((variant) => {
        if (variant.stockQuantity > 0) {
          allAttributes.availableColors.add(variant.color);
          variant.sizes.forEach((size) =>
            allAttributes.availableSizes.add(size)
          );
        }
        variant.sizes.forEach((size) => allAttributes.availableSizes.add(size));
      });
      setAvailableSizes(Array.from(allAttributes.availableSizes));
    }

    if (selectedColor) {
      const variant = product.inventory.variants.find(
        (variant) =>
          variant.color === selectedColor && variant.stockQuantity > 0
      );
      variant?.sizes.forEach((size) => {
        if (variant.sizeStock[size] > 0) {
          allAttributes.availableSizes.add(size);
        }
      });
      setAvailableSizes(Array.from(allAttributes.availableSizes));
    }
  }, [selectedColor]);

  useEffect(() => {
    const allAttributes = {
      allColors: new Set<string>(),
      allSizes: new Set<string>(),
      availableColors: new Set<string>(),
      availableSizes: new Set<string>(),
    };

    if (!selectedSize) {
      product.inventory.variants.forEach((variant) => {
        if (variant.stockQuantity > 0) {
          allAttributes.availableColors.add(variant.color);
        }
      });
    }

    if (selectedSize) {
      product.inventory.variants.forEach((variant) => {
        if (variant.stockQuantity > 0 && variant.sizeStock[selectedSize] > 0) {
          allAttributes.availableColors.add(variant.color);
        }
      });

      setAvailableColors(Array.from(allAttributes.availableColors));
    }
  }, [selectedSize]);

  const handleColorChange = (color: string) => setSelectedColor(color);
  const handleSizeChange = (size: string) => setSelectedSize(size);

  return {
    allColors,
    allSizes,
    availableColors,
    availableSizes,
    handleColorChange,
    handleSizeChange,
    selectedColor,
    selectedSize,
  };
};

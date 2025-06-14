"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type CategoryNode = {
  label: string;
  slug: string;
  children?: CategoryNode[];
};

interface Props {
  taxonomy: CategoryNode[];
  onChange: (slugPath: string[], labelPath: string[]) => void;
}

export function ProductCategorySelector({ taxonomy, onChange }: Props) {
  const [path, setPath] = useState<string[]>([]);

  const getOptionsAtLevel = (level: number): CategoryNode[] => {
    let current = taxonomy;
    for (let i = 0; i < level; i++) {
      const slug = path[i];
      const node = current.find((n) => n.slug === slug);
      if (!node || !node.children) return [];
      current = node.children;
    }
    return current;
  };

  const handleChange = (level: number, slug: string) => {
    const newPath = [...path.slice(0, level), slug];
    setPath(newPath);

    let labels: string[] = [];
    let nodes = taxonomy;
    for (const s of newPath) {
      const node = nodes.find((n) => n.slug === s);
      if (!node) break;
      labels.push(node.label);
      nodes = node.children || [];
    }

    onChange(newPath, labels);
  };

  return (
    <div className="space-y-4">
      {[0, 1, 2, 3, 4].map((level) => {
        const options = getOptionsAtLevel(level);
        if (options.length === 0) return null;

        return (
          <div key={level}>
            <Label className="mb-1 block">Level {level + 1}</Label>
            <Select
              value={path[level] || ""}
              onValueChange={(slug) => handleChange(level, slug)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt.slug} value={opt.slug}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      })}
    </div>
  );
}

export function ProductCreateForm() {
  const [category, setCategory] = useState<string[]>([]);
  const [categoryLabel, setCategoryLabel] = useState<string[]>([]);

  const handleSubmit = () => {
    console.log("🔗 Selected Slug Path:", category); // ['fashion', 'men', 'topwear', 't-shirts']
    console.log("🏷️ Selected Label Path:", categoryLabel); // ['Fashion', 'Men', 'Topwear', 'T-Shirts']
    alert(`Selected Category: ${categoryLabel.join(" > ")}`);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-xl font-semibold">Create Product</h2>

      <ProductCategorySelector
        taxonomy={taxonomy}
        onChange={(slugPath, labelPath) => {
          setCategory(slugPath);
          setCategoryLabel(labelPath);
        }}
      />

      <Button onClick={handleSubmit}>Submit</Button>

      {category.length > 0 && (
        <div className="text-sm text-gray-600">
          <strong>Selected Path:</strong> {categoryLabel.join(" > ")}
        </div>
      )}
    </div>
  );
}

export const taxonomy = [
  {
    label: "Fashion",
    slug: "fashion",
    children: [
      {
        label: "Men",
        slug: "men",
        children: [
          {
            label: "Topwear",
            slug: "topwear",
            children: [
              { label: "T-Shirts", slug: "t-shirts" },
              { label: "Shirts", slug: "shirts" },
            ],
          },
          {
            label: "Bottomwear",
            slug: "bottomwear",
            children: [
              { label: "Jeans", slug: "jeans" },
              { label: "Trousers", slug: "trousers" },
            ],
          },
        ],
      },
      {
        label: "Women",
        slug: "women",
        children: [
          {
            label: "Topwear",
            slug: "topwear",
            children: [
              { label: "T-Shirts", slug: "t-shirts" },
              { label: "Shirts", slug: "shirts" },
            ],
          },
          {
            label: "Bottomwear",
            slug: "bottomwear",
            children: [
              { label: "Jeans", slug: "jeans" },
              { label: "Trousers", slug: "trousers" },
            ],
          },
        ],
      },
    ],
  },
];

export default function TestPage() {
  return (
    <div>
      <ProductCreateForm />
    </div>
  );
}

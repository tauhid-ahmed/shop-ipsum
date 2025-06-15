"use client";

import { Heading } from "@/components";
import { DualRangeSlider } from "@/components/dual-range-slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { LucideArrowUpDown, LucideChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type FilterSection = {
  title: string;
} & React.ComponentProps<"div">;

export function FilterSection({ title, children }: FilterSection) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="space-y-4">
      <div
        className="border-b border-double border-border pb-0.5 relative after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:-bottom-px flex justify-between items-center cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Heading>{title}</Heading>
        <Button
          variant="ghost"
          size="icon"
          className={cn("group-hover:bg-accent/40")}
        >
          <LucideChevronRight
            className={cn(
              "transition-transform duration-200",
              isExpanded && "rotate-90"
            )}
          />
        </Button>
      </div>
      {isExpanded && <div className="space-y-4">{children}</div>}
    </div>
  );
}

export function FilterPrice() {
  const [amount, setAmount] = useState([0, 100]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleAmountChange = (type: "min" | "max") => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount((prevAmount) => {
        if (type === "min") {
          return [Number(e.target.value), prevAmount[1]];
        }
        return [prevAmount[0], Number(e.target.value)];
      });
    };
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("price-min", amount[0].toString());
    params.set("price-max", amount[1].toString());

    router.push(`?${params.toString()}`);
  }, [amount, router, searchParams]);

  return (
    <>
      <DualRangeSlider value={amount} onValueChange={setAmount} />
      <div className="flex gap-4 justify-between items-center">
        <Input value={amount[0]} onChange={handleAmountChange("min")} />
        <span>to</span>
        <Input value={amount[1]} onChange={handleAmountChange("max")} />
      </div>
    </>
  );
}

const colors = [
  { name: "red", code: "red" },
  { name: "blue", code: "blue" },
  { name: "orange", code: "orange" },
  { name: "indigo", code: "indigo" },
];

// Filter colors
export function FilterColors() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleColorChange = (color: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("color", color);
    router.push(`?${params.toString()}`);
    console.log("alls");
  };
  const selectedColor = searchParams.get("color") || "red";
  return (
    <>
      <RadioGroup
        onValueChange={(value) => handleColorChange(value)}
        defaultValue={selectedColor}
      >
        {colors.map((color) => (
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value={color.name}
              id="r1"
              style={{ background: color.code }}
            />
            <Label htmlFor="r1" className="capitalize">
              {color.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
}

// Filter Brands
export function FilterBrands() {
  const [brand, setBrand] = useState("");
  return (
    <>
      <Input
        placeholder="search"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-3">
          <RadioGroupItem value={"zara"} id="r1" />
          <Label htmlFor="r1" className="capitalize">
            Zara
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={"raymond"} id="r2" />
          <Label htmlFor="r2" className="capitalize">
            Raymond
          </Label>
        </div>
      </RadioGroup>
    </>
  );
}

// Filter Categories
export function FilterCategories() {
  return (
    <ul className="space-y-2">
      <li>Men's Fashion</li>
      <li>Women's Fashion</li>
      <li>Kid's Fashion</li>
      <li>Summer's Fashion</li>
    </ul>
  );
}

// Filter Sizes
export function FilterSizes() {
  return (
    <>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-3">
          <RadioGroupItem value={"zara"} id="r1" />
          <Label htmlFor="r1" className="capitalize">
            XS
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={"raymond"} id="r2" />
          <Label htmlFor="r2" className="capitalize">
            XL
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={"raymond"} id="r2" />
          <Label htmlFor="r2" className="capitalize">
            2XL
          </Label>
        </div>
      </RadioGroup>
    </>
  );
}

// Sort Products
export function SortProducts() {
  return (
    <Select>
      <SelectTrigger className="rounded-full">
        <LucideArrowUpDown />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="apple">Default Sorting</SelectItem>
          <SelectItem value="banana">Low to High</SelectItem>
          <SelectItem value="blueberry">High to Low</SelectItem>
          <SelectItem value="grapes">New Added</SelectItem>
          <SelectItem value="pineapple">On Sale</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

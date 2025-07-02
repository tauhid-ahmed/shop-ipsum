import { Heading } from "@/components";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ProductSection from "./product-section";

export default function ProductCategoryPreview() {
  return (
    <ProductSection>
      <div className="space-y-4">
        <Heading as="h2" size="2xl" align="left" weight="bold">
          Shop by category
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 auto-rows-[theme(spacing.44)] gap-2 [&>*]:border-1 [&>*]:border-primary/30 [&>*]:shadow items-stretch [&>*]:rounded-2xl [&>*]:overflow-hidden overflow-hidden">
          <CategoryCard
            badge="Eid ul fitr fashion"
            category="eid-ul-fitr-fashion"
            image="eid-ul-fitor-fashion"
            className="grid-col-1 col-span-4 md:col-span-3 md:row-span-2"
          />
          <CategoryCard
            badge="Men fashion"
            category="men-fashion"
            image="men-fashion"
            className="grid-col-4 col-span-4 md:grid-col-2 md:col-span-2"
          />
          <CategoryCard
            badge="Kid fashion"
            category="kid-fashion"
            image="kid-fashion"
            className="grid-col-1 grid-row-2 col-span-4 md:grid-col-3 md:col-span-3"
          />
          <CategoryCard
            badge="Winter fashion"
            category="winter-fashion"
            image="winter-fashion"
            className="grid-col-2 col-span-2 grid-row-2 md:grid-col-2 md:col-span-3"
          />
          <CategoryCard
            badge="Summer fashion"
            category="summer-fashion"
            image="summer-fashion"
            className="grid-col-6 col-span-2 grid-col-3 md:col-span-2"
          />
        </div>
      </div>
    </ProductSection>
  );
}

type CategoryCardProps = {
  image: string;
  className?: string;
  badge: string;
  category: string;
};

function CategoryCard({ image, className, badge }: CategoryCardProps) {
  return (
    <Link
      href={"/"}
      className={cn("relative block h-full hover:opacity-75", className)}
    >
      <Image
        src={`/assets/product/category-preview/${image}.webp`}
        height={500}
        width={500}
        alt="Category preview"
        className="size-full object-cover object-top"
      />
      <span className="absolute top-0 right-0 z-10 backdrop-blur-3xl bg-background/60 px-2 py-1 rounded font-medium text-sm shadow">
        {badge}
      </span>
    </Link>
  );
}

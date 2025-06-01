import { Heading } from "@/components";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { categoryPath } from "@/lib/constants/paths";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProductCategoryPreview() {
  return (
    <Section padding="sm">
      <Container>
        <div className="space-y-4">
          <Heading as="h2" size="2xl" align="left" weight="bold">
            Shop by category
          </Heading>
          <div className="grid grid-cols-8 auto-rows-[minmax(theme(spacing.44),theme(spacing.44))] gap-2 [&>*]:border-1 [&>*]:border-primary/30 [&>*]:shadow items-stretch [&>*]:rounded-2xl [&>*]:overflow-hidden overflow-hidden">
            <div className="col-span-8 md:col-span-3 md:row-span-2 h-full">
              <PreviewCard
                badge="Eid ul fitr fashion"
                category="eid-ul-fitr-fashion"
                image="eid-ul-fitor-fashion"
                className="md:h-full"
              />
            </div>
            <div className="col-span-8 md:col-span-2">
              <PreviewCard
                badge="Men fashion"
                category="men-fashion"
                image="men-fashion"
              />
            </div>
            <div className="col-span-4 md:col-span-3">
              <PreviewCard
                badge="Kid fashion"
                category="kid-fashion"
                image="kid-fashion"
              />
            </div>
            <div className="col-span-4 md:col-span-3">
              <PreviewCard
                badge="Winter fashion"
                category="winter-fashion"
                image="winter-fashion"
              />
            </div>
            <div className="col-span-8 md:col-span-2">
              <PreviewCard
                badge="Summer fashion"
                category="summer-fashion"
                image="summer-fashion"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type PreviewCardProps = {
  image: string;
  className?: string;
  badge: string;
  category: string;
};

function PreviewCard({ image, className, category, badge }: PreviewCardProps) {
  return (
    <Link
      href={categoryPath(category)}
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

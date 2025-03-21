import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
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
          <div className="grid grid-cols-8 auto-rows-[minmax(theme(spacing.44),theme(spacing.44))] gap-4 [&>*]:border-4 [&>*]:border-primary/30 items-stretch [&>*]:rounded-2xl [&>*]:overflow-hidden overflow-hidden">
            <div className="col-span-8 md:col-span-3 md:row-span-2 h-full">
              <PreviewCard
                badge="Eid ul fitr fashion"
                href="#"
                image="eid-ul-fitor-fashion"
                className="md:h-full"
              />
            </div>
            <div className="col-span-8 md:col-span-2">
              <PreviewCard badge="Men fashion" href="#" image="men-fashion" />
            </div>
            <div className="col-span-4 md:col-span-3">
              <PreviewCard badge="Kid fashion" href="#" image="kid-fashion" />
            </div>
            <div className="col-span-4 md:col-span-3">
              <PreviewCard
                badge="Winter fashion"
                href="#"
                image="winter-fashion"
              />
            </div>
            <div className="col-span-8 md:col-span-2">
              <PreviewCard
                badge="Summer fashion"
                href="#"
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
  href: string;
};

function PreviewCard({ image, className, href, badge }: PreviewCardProps) {
  return (
    <Link
      href={href}
      className={cn("relative block h-full hover:opacity-75", className)}
    >
      <Image
        src={`/assets/product/category-preview/${image}.webp`}
        height={500}
        width={500}
        alt="Category preview"
        className="size-full object-cover object-top"
      />
      <span className="absolute top-0 right-0 z-10 backdrop-blur-3xl bg-background/50 px-2 py-1 rounded font-semibold">
        {badge}
      </span>
    </Link>
  );
}

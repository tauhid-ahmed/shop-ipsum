import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductCategoryPreview() {
  return (
    <Section padding="sm">
      <Container>
        <div className="grid grid-cols-8 md:grid-rows-2 gap-2 items-stretch sm:h-72 md:h-96">
          <div className="col-span-8 md:col-span-3 md:row-span-2">
            <PreviewCard
              image="eid-ul-fitor-fashion"
              className="md:h-full flex-grow"
            />
          </div>
          <div className="col-span-8 md:col-span-2 flex">
            <PreviewCard image="men-fashion" className="md:h-full" />
          </div>
          <div className="col-span-4 md:col-span-3 flex">
            <PreviewCard image="kid-fashion" className="md:h-full" />
          </div>
          <div className="col-span-4 md:col-span-3 flex">
            <PreviewCard image="winter-fashion" className="md:h-full" />
          </div>
          <div className="col-span-8 md:col-span-2 flex">
            <PreviewCard image="summar-fashion" className="md:h-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PreviewCard({
  image,
  className,
}: {
  image: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden flex-grow h-40",
        className
      )}
    >
      <Image
        src={`/assets/product/category-preview/${image}.webp`}
        height={500}
        width={500}
        alt="Category preview"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

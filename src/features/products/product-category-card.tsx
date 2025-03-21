import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductCategoryPreview() {
  return (
    <Section padding="sm">
      <Container>
        <div className="grid grid-cols-8 sm:grid-rows-2 gap-2 items-stretch sm:h-72 md:h-84">
          <div className="col-span-8 sm:col-span-3 sm:row-span-2">
            <PreviewCard
              image="eid-ul-fitor-fashion"
              className="sm:h-full flex-grow"
            />
          </div>
          <div className="col-span-8 sm:col-span-2 flex">
            <PreviewCard image="men-fashion" className="sm:h-full" />
          </div>
          <div className="col-span-4 sm:col-span-3 flex">
            <PreviewCard image="kid-fashion" className="sm:h-full" />
          </div>
          <div className="col-span-4 sm:col-span-3 flex">
            <PreviewCard image="winter-fashion" className="sm:h-full" />
          </div>
          <div className="col-span-8 sm:col-span-2 flex">
            <PreviewCard image="summar-fashion" className="sm:h-full" />
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
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-4 text-center">
        <Heading className="text-white text-lg font-semibold mb-2">
          Best Fashion Deals
        </Heading>
        <Button variant="secondary" className="px-6 py-2">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

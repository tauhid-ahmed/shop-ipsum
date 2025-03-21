import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductCategoryPreview() {
  return (
    <Section padding="sm">
      <Container>
        <div className="grid grid-cols-8 md:grid-rows-2 gap-4 [&>*]:border [&>*]:border-border items-stretch [&>*]:rounded-2xl [&>*]:overflow-hidden">
          <div className="col-span-8 md:col-span-3 md:row-span-2">
            <PreviewCard image="eid-ul-fitor-fashion" className="md:h-86" />
          </div>
          <div className="col-span-8 md:col-span-2 flex">
            <PreviewCard image="men-fashion" />
          </div>
          <div className="col-span-4 md:col-span-3 flex">
            <PreviewCard image="kid-fashion" />
          </div>
          <div className="col-span-4 md:col-span-3 flex">
            <PreviewCard image="winter-fashion" />
          </div>
          <div className="col-span-8 md:col-span-2 flex">
            <PreviewCard image="summer-fashion" />
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
    <div className={cn("relative flex-grow h-40", className)}>
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

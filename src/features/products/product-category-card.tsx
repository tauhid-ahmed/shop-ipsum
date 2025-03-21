import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";

export default function ProductCategoryPreview() {
  return (
    <Section padding="sm">
      <Container>
        <div className="grid grid-cols-4">
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </div>
      </Container>
    </Section>
  );
}

function PreviewCard() {
  return (
    <div className="relative">
      <Image
        src="/assets/product/category-preview/eid-ul-fitor-fashion.webp"
        height={400}
        width={400}
        alt="category"
      />
    </div>
  );
}

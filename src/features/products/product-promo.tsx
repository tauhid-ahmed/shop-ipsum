import { Heading } from "@/components";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type ProductPromoProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export default function ProductPromo({
  title,
  description,
  ctaText,
  ctaLink,
}: ProductPromoProps) {
  return (
    <Section padding="sm">
      <Container>
        <div className="relative h-60 lg:h-84 bg-accent/50 flex items-center justify-center px-4 rounded overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image
              src="/assets/section/section-bg-01.webp"
              fill
              alt="section image"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-4 text-center">
            <Heading align="center" size="3xl" weight="bold">
              {title}
            </Heading>
            <p className="text-sm lg:text-lg text-foreground/80 font-medium">
              {description}
            </p>
            <Button asChild className="w-fit mx-auto" size="lg">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

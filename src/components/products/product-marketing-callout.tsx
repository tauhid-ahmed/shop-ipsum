import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ProductSection } from ".";
import marketingCalloutCoverImage from "@/images/marketing-callout-cover.webp";

type ProductPromoProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export default function ProductMarketingCallout({
  title,
  description,
  ctaText,
  ctaLink,
}: ProductPromoProps) {
  return (
    <ProductSection>
      <div className="relative h-60 lg:h-84 bg-accent/50 flex items-center justify-center px-4 rounded overflow-hidden">
        <div className="opacity-15 brightness-150 absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/50 after:to-transparent">
          <Image
            className="size-full object-cover"
            src={marketingCalloutCoverImage}
            alt="newsletter cover image"
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
    </ProductSection>
  );
}

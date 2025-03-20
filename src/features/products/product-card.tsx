import { Button } from "@/components/ui/button";
import { LucideLink, LucidePlus, LucideHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import UserRatings from "@/components/star-ratings";
import { useProductRevealContext } from "./product-reveal";

export type Product = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};

export default function ProductCard({ data }: { data: Product }) {
  const { openQuickShop, handleProductId } = useProductRevealContext();
  return (
    <div className="w-full space-y-4x relative overflow-hidden rounded border border-border shadow-sm">
      <div className="relative group/card overflow-hidden">
        <div className="relative h-44 sm:h-60 md:h-72 lg:h-84 bg-secondary rounded overflow-hidden flex items-center justify-center">
          <div className="inline-block h-full rounded overflow-hidden">
            <Image
              src={data.images[0]}
              width={300}
              height={300}
              alt={data.title}
              className="size-full object-contain"
            />
          </div>
          <Link
            href="/"
            className="absolute inset-0 bg-accent/30 grid place-items-center opacity-0 group-hover/card:opacity-100"
          >
            <Button variant="ghost" shape="pill" size="icon">
              <LucideLink />
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 inset-x-8 transition-transform duration-200 translate-y-full group-hover/card:-translate-y-2">
          <Button
            size="sm"
            shape="pill"
            className="w-full uppercase backdrop-blur-2xl"
            onClick={() => {
              openQuickShop();
              handleProductId(data.id);
            }}
          >
            <LucidePlus /> QuickShop
          </Button>
        </div>
      </div>
      <div className="text-center space-y-0.5 sm:space-y-1 px-1 overflow-hidden bg-secondary/20 py-4">
        <Heading
          align="center"
          weight="medium"
          className="text-muted-foreground"
          as="h3"
          size="md"
        >
          {data.title}
        </Heading>
        <p className="text-foreground/80 text-xs md:text-md lg:text-base text-ellipsis whitespace-nowrap">
          {data.description}
        </p>
        <div>
          <span className="font-semibold text-foreground/60">{data.price}</span>
        </div>
        <UserRatings size="sm" averageRating={data.averageRating}>
          <div className="flex justify-center items-center gap-1">
            <UserRatings.AverageRating />
            <UserRatings.StarList />
          </div>
        </UserRatings>
      </div>
      <div className="absolute top-0.5 right-0.5 z-10 scale-75">
        <Button variant="outline" size="icon">
          <LucideHeart />
        </Button>
      </div>
    </div>
  );
}

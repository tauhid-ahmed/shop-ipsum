import { Button } from "@/components/ui/button";
import { LucidePlus, LucideHeart, LucideShoppingCart } from "lucide-react";
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
  return (
    <div className="w-full relative overflow-hidden rounded border border-border shadow-sm group/card">
      <div className="relative overflow-hidden bg-secondary/40">
        <Link
          href="#"
          className="relative h-44 md:h-52 lg:h-60 rounded overflow-hidden flex items-center justify-center"
        >
          <div className="inline-block h-full rounded overflow-hidden p-2">
            <Image
              src={data.images[0]}
              width={300}
              height={300}
              alt={data.title}
              className="size-full object-contain"
            />
          </div>
        </Link>
        <QuickShopButton id={data.id} />
      </div>
      <div className="bg-secondary/20">
        <Link
          href="#"
          className="text-center space-y-0.5 sm:space-y-1 mx-4 block py-4 relative overflow-hidden"
        >
          <Heading
            align="center"
            weight="medium"
            className="text-foreground/70 text-ellipsis whitespace-nowrap"
            as="h3"
            size="sm"
          >
            {data.title}
          </Heading>
          <p className="text-foreground/90 text-sm md:text-md lg:text-base text-ellipsis whitespace-nowrap">
            {data.description}
          </p>
          <div>
            <span className="font-semibold text-foreground/70">
              <PrevPrice />
              {data.price}
            </span>
          </div>
          <UserRatings size="sm" averageRating={data.averageRating}>
            <div className="flex justify-center items-center gap-1">
              <UserRatings.AverageRating />
              <UserRatings.StarList />
            </div>
          </UserRatings>
        </Link>
      </div>
      <div className="absolute top-0 right-0 z-10">
        <Button variant="ghost" size="icon">
          <LucideHeart />
        </Button>
      </div>
    </div>
  );
}

function QuickShopButton({ id }: { id: string }) {
  const { openQuickShop, handleProductId } = useProductRevealContext();
  return (
    <>
      <div className="absolute bottom-0 inset-x-8 transition-transform duration-200 translate-y-full group-hover/card:-translate-y-4 hidden lg:block">
        <Button
          size="sm"
          className="w-full uppercase"
          onClick={() => {
            openQuickShop();
            handleProductId(id);
          }}
        >
          <LucidePlus /> QuickShop
        </Button>
      </div>
      <div className="absolute right-0 bottom-0 lg:hidden">
        <Button
          onClick={() => {
            openQuickShop();
            handleProductId(id);
          }}
          variant="ghost"
          size="icon"
        >
          <LucideShoppingCart />
        </Button>
      </div>
    </>
  );
}

function PrevPrice({ price = "55.99" }: { price?: string }) {
  return (
    <span className="text-sm text-destructive px-1 relative before:absolute before:inset-x-0 before:h-px before:bg-destructive before:top-1/2 mr-0.5">
      {price}
    </span>
  );
}

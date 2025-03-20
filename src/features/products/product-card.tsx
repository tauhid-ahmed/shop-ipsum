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
    <div className="w-full relative overflow-hidden rounded border border-border shadow-sm">
      <div className="relative group/card overflow-hidden">
        <Link
          href="#"
          className="relative h-44 sm:h-60 md:h-72 lg:h-80 bg-secondary rounded overflow-hidden flex items-center justify-center"
        >
          <div className="inline-block h-full rounded overflow-hidden">
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
      <Link
        href="#"
        className="text-center space-y-0.5 sm:space-y-1 px-1 overflow-hidden bg-secondary/20 py-4"
      >
        <Heading
          align="center"
          weight="medium"
          className="text-foreground/80 font-semibold"
          as="h3"
          size="sm"
        >
          {data.title}
        </Heading>
        <p className="text-foreground/90 text-sm md:text-md lg:text-base text-ellipsis whitespace-nowrap font-medium">
          {data.description}
        </p>
        <div>
          <span className="font-semibold text-foreground/90">{data.price}</span>
        </div>
        <UserRatings size="sm" averageRating={data.averageRating}>
          <div className="flex justify-center items-center gap-1">
            <UserRatings.AverageRating />
            <UserRatings.StarList />
          </div>
        </UserRatings>
      </Link>
      <div className="absolute top-0 right-0 z-10 scale-75">
        <Button variant="outline" size="icon">
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
          size="md"
          className="w-full uppercase backdrop-blur-2xl"
          onClick={() => {
            openQuickShop();
            handleProductId(id);
          }}
        >
          <LucidePlus /> QuickShop
        </Button>
      </div>
      <div className="absolute right-0 bottom-0 scale-75 lg:hidden ">
        <Button
          onClick={() => {
            openQuickShop();
            handleProductId(id);
          }}
          variant="outline"
          size="icon"
          className="shadow"
        >
          <LucideShoppingCart />
        </Button>
      </div>
    </>
  );
}

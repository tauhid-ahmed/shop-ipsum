import { Button } from "@/components/ui/button";
import { LucideLink, LucidePlus, LucideHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import UserRatings from "@/components/star-ratings";
import { useProductRevealContext } from "./product-reveal";

export type data = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};

export default function ProductCard({ data }: { data: data }) {
  const { openQuickShop, handleProductId } = useProductRevealContext();
  return (
    <div className="w-full max-w-80 space-y-4 relative overflow-hidden rounded shadow-sm">
      <div className="relative group/card overflow-hidden">
        <div className="relative w-full rounded overflow-hidden">
          <Image
            src={data.image}
            width={300}
            height={300}
            alt={data.title}
            className="size-full object-cover"
          />
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
      <div className="text-center">
        <Heading weight="medium" className="text-muted-foreground" size="sm">
          {data.title}
        </Heading>
        <p className="text-foreground/80 text-ellipsis">{data.description}</p>
        <div>
          <span className=" font-semibold">{data.price}</span>
        </div>
        <UserRatings size="sm" averageRating={data.averageRating}>
          <div className="flex justify-center items-center gap-1">
            <UserRatings.AverageRating />
            <UserRatings.StarList />
          </div>
        </UserRatings>
      </div>
      <div className="absolute top-1.5 right-1.5 z-10">
        <Button variant="outline" size="icon">
          <LucideHeart />
        </Button>
      </div>
    </div>
  );
}

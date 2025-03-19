import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";
import UserRatings from "@/components/star-ratings";
import { DotSeparator } from "@/components/dot-separator";
import Embla, { useEmblaContext } from "@/components/embla";
import { ProductColorVariants, ProductSizeVariants } from "./product-variants";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: "1",
    image: "/assets/product/product-01.jpg",
    title: "Classic T-Shirt",
    description: "Premium cotton, perfect fit.",
    price: "$24.99",
  },
  {
    id: "2",
    image: "/assets/product/product-02.jpg",
    title: "Classic T-Shirt",
    description: "Premium cotton, perfect fit.",
    price: "$24.99",
  },
];

export function QuickShop() {
  return (
    <Dialog open={false}>
      <DialogContent className="flex flex-col md:flex-row md:gap-10 max-w-md md:max-w-4xl">
        <div className="w-full md:w-84 relative cursor-grab">
          <Embla data={data}>
            <Embla.Container>
              <Carousel />
            </Embla.Container>
            <Embla.NavigationControls />
          </Embla>
        </div>

        {/* Right Column */}
        <div className="flex-1 items-center md:items-start flex flex-col">
          <div className="space-y-2">
            <DialogHeader>
              <DialogTitle className="text-left text-xl">
                {data[0].title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <span className="text-xl lg:text-lg font-semibold">
                {data[0].price}
              </span>
            </DialogDescription>
            <div className="flex flex-col gap-4">
              <UserRatings averageRating={4.3} size="lg" isInteractive={false}>
                <div className="flex gap-1 items-center">
                  <UserRatings.AverageRating />
                  <UserRatings.StarList />
                  <DotSeparator />
                  <UserRatings.TotalReviews />
                </div>
              </UserRatings>
              <ProductColorVariants />
              <ProductSizeVariants />
              <ADD_TO_CART />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ADD_TO_CART() {
  return (
    <div className="flex flex-col gap-4">
      <Button size="lg">Add to cart</Button>
      <Button size="lg" variant="link">
        View Details
      </Button>
    </div>
  );
}

function Carousel() {
  const { data } = useEmblaContext();
  return data.map((item: Record<string, string>, index) => (
    <Embla.Slide key={index}>
      <div className="h-72 sm:h-84 md:h-full w-full mx-auto bg-secondary rounded">
        <Image
          src={item.image}
          width={300}
          height={300}
          alt={item.id}
          className="size-full object-contain"
        />
      </div>
    </Embla.Slide>
  ));
}

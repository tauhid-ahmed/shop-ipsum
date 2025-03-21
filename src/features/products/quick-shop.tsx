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
import { useProductRevealContext } from "./product-reveal";
import { data } from "@/data/products";

type Product = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};

export function QuickShop() {
  const { quickShop, openQuickShop, productId } = useProductRevealContext();
  const product = data.find((product) => product.id === productId);

  return (
    <Dialog open={quickShop} onOpenChange={openQuickShop}>
      <DialogContent className="flex flex-col md:flex-row md:gap-10 max-w-md md:max-w-4xl overflow-y-scroll">
        <div className="w-full md:w-84 relative cursor-grab">
          <Embla data={[product]}>
            <Embla.Container>
              <Carousel />
            </Embla.Container>
            <Embla.NavigationControls hidden={false} />
          </Embla>
        </div>

        {/* Right Column */}
        <div className="flex-1 items-center md:items-start md:justify-center flex flex-col">
          <div className="space-y-4 md:space-y-8">
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl lg:text-2xl text-foreground/70">
                {data[0].title}
              </DialogTitle>
              <span className="text-lg lg:text-xl">{data[0].price}</span>
              <UserRatings averageRating={4.3} size="md" isInteractive={false}>
                <div className="flex gap-1 items-center">
                  <UserRatings.AverageRating />
                  <UserRatings.StarList />
                  <DotSeparator />
                  <UserRatings.TotalReviews />
                </div>
              </UserRatings>
            </DialogHeader>
            <DialogDescription className="sr-only">
              Product variants section
            </DialogDescription>
            <div className="flex flex-col gap-4 md:gap-8">
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
    <div className="flex flex-col gap-1 md:gap-2">
      <Button size="lg">Add to cart</Button>
      <Button size="lg" variant="link">
        View Details
      </Button>
    </div>
  );
}

function Carousel() {
  const { data, selectedSlide } = useEmblaContext();
  const [product] = data as [Product];
  console.log(selectedSlide);
  return product.images.map((item: string, index) => (
    <Embla.Slide key={index}>
      <div className="h-52 md:h-full w-full mx-auto bg-secondary rounded">
        <Image
          src={item}
          width={300}
          height={300}
          alt={"item.id"}
          className="size-full object-contain"
        />
      </div>
    </Embla.Slide>
  ));
}

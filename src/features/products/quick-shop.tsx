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

type Product = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};
const data = [
  {
    id: "1",
    images: [
      "/assets/product/product-01.png",
      "/assets/product/product-01.png",
    ],
    title: "Classic T-Shirt",
    description: "Premium cotton, perfect fit.",
    price: "$24.99",
    averageRating: 4.5,
    totalReviews: 100,
  },
  {
    id: "2",
    images: [
      "/assets/product/product-02.png",
      "/assets/product/product-02.png",
    ],
    title: "Casual Shirt",
    description: "Lightweight and stylish.",
    price: "$29.99",
    averageRating: 4.2,
    totalReviews: 80,
  },
  {
    id: "3",
    images: [
      "/assets/product/product-03.png",
      "/assets/product/product-03.png",
    ],
    title: "Formal Shirt",
    description: "Elegant design for any occasion.",
    price: "$39.99",
    averageRating: 4.8,
    totalReviews: 120,
  },
  {
    id: "4",
    images: [
      "/assets/product/product-04.png",
      "/assets/product/product-05.png",
    ],
    title: "Vintage T-Shirt",
    description: "Retro vibes, modern comfort.",
    price: "$27.99",
    averageRating: 4.6,
    totalReviews: 90,
  },
  {
    id: "5",
    images: [
      "/assets/product/product-05.png",
      "/assets/product/product-05.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "6",
    images: [
      "/assets/product/product-06.png",
      "/assets/product/product-06.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "7",
    images: [
      "/assets/product/product-07.png",
      "/assets/product/product-07.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "8",
    images: [
      "/assets/product/product-08.png",
      "/assets/product/product-08.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "9",
    images: [
      "/assets/product/product-09.png",
      "/assets/product/product-09.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "10",
    images: [
      "/assets/product/product-10.png",
      "/assets/product/product-10.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "11",
    images: [
      "/assets/product/product-11.png",
      "/assets/product/product-11.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "12",
    images: [
      "/assets/product/product-12.png",
      "/assets/product/product-12.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
];

export function QuickShop() {
  const { quickShop, openQuickShop, productId } = useProductRevealContext();
  const product = data.find((product) => product.id === productId);

  return (
    <Dialog open={quickShop} onOpenChange={openQuickShop}>
      <DialogContent className="flex flex-col md:flex-row md:gap-10 max-w-md md:max-w-4xl">
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
              <DialogTitle className="text-xl">{data[0].title}</DialogTitle>
              <span className="text-lg">{data[0].price}</span>
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
      <div className="h-72 sm:h-84 md:h-full w-full mx-auto bg-secondary rounded">
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

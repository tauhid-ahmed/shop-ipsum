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
    <Dialog open={true}>
      <DialogContent className="flex flex-col md:flex-row sm:max-w-xl md:max-w-5xl">
        <div className="w-full md:w-84 relative">
          <Embla data={data}>
            <Embla.Container>
              <Carousel />
            </Embla.Container>
            <Embla.NavigationControls />
          </Embla>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col">
          <div className="space-y-2">
            <DialogHeader>
              <DialogTitle className="text-left text-2xl lg:text-3xl">
                {data[0].title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <span className="text-xl lg:text-2xl font-semibold">
                {data[0].price}
              </span>
            </DialogDescription>
            <div className="flex flex-col gap-2">
              <UserRatings averageRating={4.3} size="lg" isInteractive={false}>
                <div className="flex gap-1 items-center">
                  <UserRatings.AverageRating className="lg:text-xl" />
                  <UserRatings.StarList />
                  <DotSeparator />
                  <UserRatings.TotalReviews />
                </div>
              </UserRatings>
            </div>
          </div>
          <div className="h-96"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Carousel() {
  const { data } = useEmblaContext();
  return data.map((item: Record<string, string>, index) => (
    <Embla.Slide key={index}>
      <div className="h-96 md:h-full w-full mx-auto bg-secondary">
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

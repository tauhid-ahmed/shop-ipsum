import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SwiperProvider,
  CardSlider,
  NavigationControls,
} from "@/components/carousel/card-slider";

import Image from "next/image";
import UserRatings from "@/components/star-ratings";
import { DotSeparator } from "@/components/dot-separator";

const data = {
  id: "1",
  image: "/assets/product/product-01.jpg",
  title: "Classic T-Shirt",
  description: "Premium cotton, perfect fit.",
  price: "$24.99",
};

export function QuickShop() {
  return (
    <Dialog open={false}>
      <DialogContent className="flex flex-col md:flex-row sm:max-w-5xl [&_.swiper]:h-full [&_.swiper-wrapper]:h-full [&_.swiper-slide]:h-full">
        <div className="w-96 h-full border">
          <SwiperProvider>
            <div className="relative h-full bg-secondary border">
              <CardSlider
                data={[data, data, data]}
                slidesPerView={1}
                autoplay={false}
                spaceBetween={0}
                className="h-full"
                render={(item) => {
                  return (
                    <div className="h-full border">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="size-full object-contain"
                      />
                    </div>
                  );
                }}
              />
              <NavigationControls />
            </div>
          </SwiperProvider>
        </div>
        <div className="flex-1 border">
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="space-y-2">
            <DialogHeader>
              <DialogTitle className="text-left text-2xl lg:text-3xl">
                {data.title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <span className="text-xl lg:text-2xl font-semibold">
                {data.price}
              </span>
            </DialogDescription>
            <div className="flex flex-col gap-2">
              <UserRatings averageRating={4.3} size="lg" isInteractive={false}>
                <div className="flex gap-1 items-center">
                  <UserRatings.AverageRating />
                  <UserRatings.StarList />
                  <DotSeparator />
                  <UserRatings.TotalReviews />
                </div>
              </UserRatings>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

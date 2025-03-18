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
import { Heading } from "@/components/heading";

const data = {
  id: "1",
  image: "/assets/bannerx/image-01.webp",
  title: "Classic T-Shirt",
  description: "Premium cotton, perfect fit.",
  price: "$24.99",
};

export function QuickShop() {
  return (
    <Dialog open={true}>
      <DialogContent className="w-full sm:max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 relative">
          <SwiperProvider>
            <div className="max-w-96 h-80 md:h-full flex-1 border md:max-w-80 w-full relative">
              <CardSlider
                data={[data, data, data]}
                slidesPerView={1}
                autoplay={false}
                spaceBetween={0}
                render={(item) => {
                  return (
                    <div className="size-full h-[500px] flex-1 bg-red-500">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="size-full object-cover"
                      />
                    </div>
                  );
                }}
              />
              <NavigationControls />
            </div>
          </SwiperProvider>
          <div className="flex-1">
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
                <UserRatings averageRating={4.3} size="lg" />
              </div>
              <div className="h-96"></div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

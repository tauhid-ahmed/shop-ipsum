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
import StarRatings from "@/components/star-ratings";

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
      <DialogContent className="w-fit">
        <div className="flex flex-col gap-4 relative">
          <SwiperProvider>
            <div className="max-w-96 w-full relative">
              <CardSlider
                data={[data, data, data]}
                slidesPerView={1}
                autoplay={false}
                spaceBetween={0}
                render={(item) => {
                  return (
                    <div className="w-full h-80 bg-red-500">
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
          <div>
            <DialogHeader>
              <DialogTitle className="text-left">{data.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <div className="flex flex-col gap-2">
                <StarRatings />
              </div>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

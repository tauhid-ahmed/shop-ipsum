"use client";

import { Container } from "../layout/container";
import { Section } from "../layout/section";
import Embla, { useEmblaContext } from "../embla";
import Image from "next/image";
import Link from "next/link";
import { productDetailsRoute } from "@/constants/paths";

type DataType = {
  id: string;
  image: string;
  slug: string;
};

const data: DataType[] = [
  {
    id: "1",
    image: "/assets/banner/banner-01.webp",
    slug: "techlisten-pro-sound-noise-cancelling-headphones",
  },
  {
    id: "2",
    image: "/assets/banner/banner-02.webp",
    slug: "wristtech-fit-pro-smartwatch",
  },
  {
    id: "3",
    image: "/assets/banner/banner-03.webp",
    slug: "alpine-core-trek-shell-waterproof-jacket",
  },
  {
    id: "4",
    image: "/assets/banner/banner-04.webp",
    slug: "mountain-trek-ultra-grip-hiking-boots",
  },
  {
    id: "5",
    image: "/assets/banner/banner-05.webp",
    slug: "wristtech-fit-pro-smartwatch",
  },
];

export default function IntroBanner() {
  return (
    <Embla data={data} playOnInit={true} delay={6000} stopOnLastSnap={true}>
      <Section padding="sm">
        <Container>
          <div className="relative group/embla">
            <Embla.Container>
              <Carousel />
            </Embla.Container>
            <Embla.NavigationControls />
          </div>
        </Container>
      </Section>
    </Embla>
  );
}

function Carousel() {
  const { data } = useEmblaContext();
  const product = data as DataType[];
  return product.map((item, index) => (
    <Embla.Slide key={index}>
      <div className="h-60 md:h-72 lg:h-80 relative rounded overflow-hidden">
        <Link href={productDetailsRoute(item.slug)}>
          <Image
            src={item.image}
            fill
            alt={item.id}
            className="size-full object-cover"
            priority
          />
        </Link>
      </div>
    </Embla.Slide>
  ));
}

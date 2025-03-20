"use client";

import { Container } from "../layout/container";
import { Section } from "../layout/section";
import Embla, { useEmblaContext } from "../embla";
import Image from "next/image";

type DataType = {
  id: string;
  image: string;
};

const data: DataType[] = [
  { id: "1", image: "/assets/banner/image-01.svg" },
  { id: "2", image: "/assets/banner/image-02.svg" },
  { id: "3", image: "/assets/banner/image-03.svg" },
];

export default function IntroBanner() {
  return (
    <Embla data={data} playOnInit={true} delay={6000} stopOnLastSnap={false}>
      <Section>
        <Container>
          <div className="relative">
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
      <div className="h-96 relative">
        <Image
          src={item.image}
          fill
          alt={item.id}
          className="size-full object-cover"
        />
      </div>
    </Embla.Slide>
  ));
}

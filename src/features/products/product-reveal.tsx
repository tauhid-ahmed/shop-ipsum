import React from "react";
import { Heading } from "@/components/heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import {
  SwiperProvider,
  CardSlider,
  NavigationControls,
} from "@/components/carousel/card-slider";

type ProductRevealProps = {
  title: string;
};

export default function ProductReveal({ title }: ProductRevealProps) {
  return (
    <Section padding="sm">
      <Container>
        <SwiperProvider>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Heading align="left" weight="bold">
                {title}
              </Heading>
              <NavigationControls />
            </div>
            <CardSlider />
          </div>
        </SwiperProvider>
      </Container>
    </Section>
  );
}

import { Heading } from "@/components/heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { countdown } from "@/lib/countdown";
// import Slider from "@/components/carousel/slider";
// import CardSlider from "@/components/carousel/card-slider";
// import StarRatings from "@/components/star-ratings";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <Section>
      <Container>
        <Heading>
          Welcome to BDStore {countdown().days} days and {countdown().hours}{" "}
          hours left to launch
        </Heading>
        {JSON.stringify(session)}
        {/* <Slider />
        <div className="my-32 bg-amber-900 h-96 text-red-500">
          <CardSlider />
        </div>
        <StarRatings /> */}
      </Container>
    </Section>
  );
}

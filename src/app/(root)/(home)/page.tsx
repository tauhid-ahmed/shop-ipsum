import { Heading } from "@/components/heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { countdown } from "@/lib/countdown";

export default function Home() {
  return (
    <Section>
      <Container>
        <Heading>
          Welcome to BDStore {countdown().days} days and {countdown().hours}{" "}
          hours left to launch
        </Heading>
      </Container>
    </Section>
  );
}

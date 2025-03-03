import { Text } from "@/components/text";
import { Container, Section } from "@/components/layout/ui-layout";

export default function Home() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-center">Welcome to BDStore</h1>
        <Text weight="light" size="2xl" as="h1">
          Your one stop shop for all your grocery needs
        </Text>
      </Container>
    </Section>
  );
}

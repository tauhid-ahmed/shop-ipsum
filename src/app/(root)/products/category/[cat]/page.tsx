import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type Params = {
  params: Promise<{
    cat: string;
  }>;
};

export default async function CataloguePage({ params }: Params) {
  const { cat } = await params;
  return (
    <Section>
      <Container>
        <h1>Catalogue</h1>
        <p>{cat}</p>
      </Container>
    </Section>
  );
}

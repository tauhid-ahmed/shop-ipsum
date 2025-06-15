import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

type ProductSection = {} & React.ComponentProps<"div">;

export default function ProductSection({ children }: ProductSection) {
  return (
    <>
      <Section padding="sm">
        <Container>{children}</Container>
      </Section>
    </>
  );
}

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section padding="lg">
      <Container size="xs" flush>
        {children}
      </Container>
    </Section>
  );
}

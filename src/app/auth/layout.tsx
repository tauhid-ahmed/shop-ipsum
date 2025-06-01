import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section center>
      <Container size="sm">{children}</Container>
    </Section>
  );
}

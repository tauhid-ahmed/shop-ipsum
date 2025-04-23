import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DashboardContainer } from "@/features/dashboard/dashboard-container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Container size="fluid" flush>
        <DashboardContainer>
          <div className="p-8 bg-background">{children}</div>
        </DashboardContainer>
      </Container>
    </Section>
  );
}

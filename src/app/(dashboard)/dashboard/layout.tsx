import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DashboardNavigation } from "@/features/dashboard/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Container size="fluid">
        <div className="grid grid-cols-[300px_1fr]">
          <DashboardNavigation />
          <div className="">{children}</div>
        </div>
      </Container>
    </Section>
  );
}

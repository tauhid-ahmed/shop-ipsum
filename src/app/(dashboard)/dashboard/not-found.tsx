"use client";
import { NotFound } from "@/components";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { dashboardPath } from "@/constants/paths";

export default function AdminNotFoundPage() {
  return (
    <Section>
      <Container>
        <NotFound backLink={dashboardPath()} />
      </Container>
    </Section>
  );
}

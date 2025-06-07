"use client";
import { NotFound } from "@/components";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function RootNotFound() {
  return (
    <Section center>
      <Container>
        <NotFound />
      </Container>
    </Section>
  );
}

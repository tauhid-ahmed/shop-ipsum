"use client";
import Link from "next/link";
import { Heading } from "@/components";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { homePath } from "@/lib/constants/paths";

export default function NotFound() {
  return (
    <Section center>
      <Container>
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <Heading
              align="center"
              className="text-primary"
              size="4xl"
              weight="bold"
              as="h1"
            >
              404
            </Heading>
            <Heading align="center" as="h2" weight="bold" size="6xl">
              Page not found
            </Heading>
          </div>
          <p className="text-muted-foreground lg:text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button size="lg" asChild>
              <Link href={homePath()}>Back to home</Link>
            </Button>
            <Button size="lg" variant="ghost">
              Contact support →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

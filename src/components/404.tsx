"use client";
import Link from "next/link";
import { Heading } from "./heading";
import { Container } from "./layout/container";
import { Section } from "./layout/section";
import { Button } from "./ui/button";
import { homePath } from "@/constants/paths";

export default function NotFound() {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-8 text-center">
          <div className="space-y-1">
            <Heading
              align="center"
              className="text-primary"
              size="lg"
              weight="bold"
              as="h1"
            >
              404
            </Heading>
            <Heading align="center" as="h2" weight="bold" size="6xl">
              Page not found
            </Heading>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground lg:text-lg">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. Go
              back home
            </p>
            <div className="flex justify-center items-center gap-1">
              <Button size="lg" asChild>
                <Link href={homePath()}>Back to home</Link>
              </Button>
              <Button size="lg" variant="ghost">
                Contact support →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

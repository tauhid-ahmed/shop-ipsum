import Link from "next/link";
import { Heading } from "@/components";
import { Container } from "./layout/container";
import { Section } from "./layout/section";
import { Button } from "./ui/button";
import { homePath } from "@/lib/constants/paths";

type ErrorProps = {
  code?: number;
  title: string;
  message: string;
  extendedMessage?: string;
  reset: () => void;
};

export default function Error({
  code = 500,
  title,
  message,
  extendedMessage,
  reset,
}: ErrorProps) {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <Heading
              align="center"
              className="text-primary"
              size="lg"
              weight="bold"
              as="h1"
            >
              {code}
            </Heading>
            <Heading align="center" as="h2" weight="bold" size="6xl">
              {title}
            </Heading>
            <p className="text-muted-foreground">{message}</p>
          </div>
          {extendedMessage && (
            <p className="text-muted-foreground lg:text-lg text-left max-w-4xl mx-auto">
              {extendedMessage}
            </p>
          )}
          <div className="flex justify-center items-center gap-2">
            <Button onClick={reset} size="lg">
              Retry
            </Button>
            <Link href={homePath()} passHref>
              <Button size="lg" variant="ghost" asChild>
                <span>Back to home</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

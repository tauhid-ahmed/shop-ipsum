import Link from "next/link";
import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { homePath } from "@/constants/paths";

type NotFoundProps = {
  backLink?: string;
} & React.ComponentProps<"div">;

export default function NotFound({ backLink = homePath() }: NotFoundProps) {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <Heading
          align="center"
          className="text-primary"
          size="4xl"
          weight="bold"
          as="h2"
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
          <Link href={backLink}>Back to home</Link>
        </Button>
        <Button size="lg" variant="ghost">
          Contact support →
        </Button>
      </div>
    </div>
  );
}

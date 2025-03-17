import { env } from "@/constants/env";
import { Container } from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-4 text-center">
      <Container>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {env.NEXT_PUBLIC_APP_NAME}. All
          rights reserved.
        </p>
      </Container>
    </footer>
  );
}

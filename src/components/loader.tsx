import { LucideLoaderCircle } from "lucide-react";
import { Section } from "./layout/section";

export default function PageLoader() {
  return (
    <Section className="flex-1 flex items-center justify-center">
      <LucideLoaderCircle className="animate-spin" />
    </Section>
  );
}

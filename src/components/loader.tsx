import { LucideLoaderCircle, Loader } from "lucide-react";
import { Section } from "./layout/section";

export default function PageLoader() {
  return (
    <Section
      className="flex-1 flex items-center justify-center h-screen"
      padding="lg"
    >
      <LucideLoaderCircle size={32} className="animate-spin" />
    </Section>
  );
}

export function Loader2() {
  return <Loader size={48} className="animate-spin" />;
}

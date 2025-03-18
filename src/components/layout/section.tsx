import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  padding?: "default" | "sm" | "md" | "lg" | "none";
};

export function Section({
  children,
  className,
  padding = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-x-hidden",
        {
          "py-10": padding === "default",
          "py-12 md:py-16 lg:py-20": padding === "lg",
          "py-8 lg:py-14": padding === "md",
          "py-8": padding === "sm",
          "py-0": padding === "none",
        },
        className
      )}
    >
      {children}
    </section>
  );
}

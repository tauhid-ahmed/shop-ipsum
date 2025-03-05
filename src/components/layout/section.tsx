import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  padding?: "default" | "sm" | "md" | "lg";
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
          "py-12 md:py-16 lg:py-24": padding === "lg",
          "py-14": className === "md",
          "py-8": className === "sm",
        },
        className
      )}
    >
      {children}
    </section>
  );
}

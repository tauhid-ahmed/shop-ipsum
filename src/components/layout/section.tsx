import { cn } from "@/lib/utils";

type SectionProps = {
  padding?: "xs" | "sm" | "md" | "lg" | "xl";
  center?: boolean;
} & React.ComponentProps<"section">;

export function Section({
  children,
  className,
  padding,
  center,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        center && "flex items-center justify-center min-h-screen",
        {
          "py-6 sm:py-8 md:py-10": padding === "xs",
          "py-8 sm:py-10 md:py-12": padding === "sm",
          "py-10 sm:py-12 md:py-16": padding === "md",
          "py-12 sm:py-16 md:py-20": padding === "lg",
          "py-16 sm:py-20 md:py-24": padding === "xl",
        },
        className
      )}
    >
      {children}
    </section>
  );
}

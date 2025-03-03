import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

type ContainerProps = {
  size?: "default" | "sm" | "md" | "fluid";
} & Props;

type SectionProps = {
  padding?: "default" | "sm" | "md";
} & Props;

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        {
          "max-w-7xl w-full": size === "default",
          "max-w-5xl w-full": size === "md",
          "max-w-4xl w-full": size === "sm",
          "w-full": size === "fluid",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

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

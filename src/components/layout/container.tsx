import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "md" | "xs" | "fluid";
  flush?: boolean;
};

export function Container({
  children,
  className,
  size = "default",
  flush = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        {
          "max-w-7xl w-full": size === "default",
          "max-w-5xl w-full": size === "md",
          "max-w-4xl w-full": size === "sm",
          "max-w-[30rem] w-full": size === "xs",
          "w-full": size === "fluid",
          "px-0": flush,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

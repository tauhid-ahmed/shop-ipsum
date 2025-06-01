import { cn } from "@/lib/utils";

type ContainerProps = {
  size?: "sm" | "md" | "lg" | "xl" | "fluid";
} & React.ComponentProps<"div">;

export function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        {
          "max-w-[30rem] w-full": size === "sm",
          "max-w-4xl w-full": size === "md",
          "max-w-5xl w-full": size === "lg",
          "max-w-7xl w-full": size === "xl",
          "w-full": size === "fluid",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

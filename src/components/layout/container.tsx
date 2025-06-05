import { cn } from "@/lib/utils";

type ContainerProps = {
  size?: "sm" | "md" | "lg" | "xl";
} & React.ComponentProps<"div">;

export function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6",
        {
          "max-w-[30rem]": size === "sm",
          "max-w-4xl": size === "md",
          "max-w-5xl": size === "lg",
          "max-w-7xl": size === "xl",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

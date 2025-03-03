import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "default";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Heading({
  children,
  className,
  size = "2xl",
  as = "h2",
  weight = "normal",
  align = "center",
}: HeadingProps) {
  const Comp = as;

  const fontSizeClasses = {
    default: "text-base",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  } as const;

  const fontWeightClasses = {
    normal: "font-normal",
    light: "font-light",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  } as const;

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Comp
      className={cn(
        "font-primary",
        fontSizeClasses[size],
        fontWeightClasses[weight],
        textAlignClasses[align],
        className
      )}
    >
      {children}
    </Comp>
  );
}

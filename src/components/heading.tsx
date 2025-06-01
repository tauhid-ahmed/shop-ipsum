import { cn } from "@/lib/utils";

type HeadingProps = {
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
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Heading({
  children,
  className,
  size = "default",
  as = "h2",
  weight = "medium",
  align = "left",
  ...props
}: HeadingProps) {
  const Comp = as;

  const fontSizeClasses = {
    default: "text-base",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-base md:text-lg",
    xl: "text-lg md:text-xl",
    "2xl": "text-xl md:text-2xl",
    "3xl": "text-2xl md:text-3xl",
    "4xl": "text-3xl md:text-4xl",
    "5xl": "text-3xl md:text-4xl lg:text-5xl",
    "6xl": "text-4xl md:text-5xl lg:text-6xl",
    "7xl": "text-5xl md:text-6xl lg:text-7xl", // ~72px at largest size
    "8xl": "text-5xl md:text-6xl lg:text-8xl", // For special cases
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
        "font-primary text-foreground",
        fontSizeClasses[size],
        fontWeightClasses[weight],
        textAlignClasses[align],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

import { Button } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export default function ActionButton({
  children,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof Button>) {
  return (
    <Button variant="secondary" type="button" {...props}>
      {children}
    </Button>
  );
}

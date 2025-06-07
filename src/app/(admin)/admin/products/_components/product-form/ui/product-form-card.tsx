import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideBox, LucideIcon } from "lucide-react";

type ProductFormCard = {
  title: string;
  description: string;
  icon: LucideIcon;
} & React.ComponentProps<"div">;

export function ProductFormCard({
  title = "Product Details",
  description = "Quis modi magni mollitia ex. Voluptatum ipsa doloremque quidem labore culpa hic!",
  children,
}: ProductFormCard) {
  return (
    <Card>
      <CardHeader className="relative pl-16">
        <span className="rounded absolute flex left-4 top-1 border size-8 items-center justify-center">
          <LucideBox className="size-6" />
        </span>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

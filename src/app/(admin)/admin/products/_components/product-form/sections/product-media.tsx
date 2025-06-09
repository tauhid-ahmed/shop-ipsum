import { ProductFormCard } from "../ui/product-form-card";
import { productFormSections } from "../form-sections.config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideUpload } from "lucide-react";

const { productMedia } = productFormSections;

interface ProductMediaStats {
  imageCount: number;
  storageUsed: string;
  imageLimit: number;
}

interface ProductMediaProps {
  stats: ProductMediaStats;
  // onFileUpload?: (files: FileList) => void; // Example for future interactivity
}

export default function ProductMedia({ stats }: ProductMediaProps) {
  return (
    <ProductFormCard
      title={productMedia.title}
      description={productMedia.description}
      icon={<productMedia.icon className="text-indigo-500" />}
    >
      <Card>
        <CardHeader>
          <CardTitle>Product Media</CardTitle>
          <CardDescription>Upload and manage product images.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="size-60 rounded border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center">
              <LucideUpload className="text-muted-foreground" size={32} />
              <span>Drop images here</span>
              <span className="text-muted-foreground text-sm">
                or click to browse
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex [&>*]:flex-1 gap-6 justify-between text-center border border-border p-6 border-dashed leading-tight bg-accent/50 rounded">
            <span>
              <span className="font-bold text-xl block">
                {stats.imageCount}
              </span>
              <span className="text-muted-foreground">Images</span>
            </span>
            <span>
              <span className="font-bold text-xl block">
                {stats.storageUsed}
              </span>
              <span className="text-muted-foreground">Storage Used</span>
            </span>
            <span>
              <span className="font-bold text-xl block">
                {stats.imageLimit}
              </span>
              <span className="text-muted-foreground">Image Limit</span>
            </span>
          </div>
        </CardFooter>
      </Card>
    </ProductFormCard>
  );
}

import { Button } from "@/components/ui/button";
import { ProductColorVariants, ProductSizeVariants } from "./product-variants";
import { Heading } from "@/components/heading";
import { Product } from "./product-card";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="border-b border-border pb-4">
        <Heading size="2xl" as="h2">
          {product?.title}
        </Heading>
        <strong className="text-xl">{product?.price}</strong>
        <p>{product?.description}</p>
        <p className="text-sm">
          Pay in 4 interest-free installments for orders over $5000 with &nbsp;
          <strong>shop pay</strong>
          <Button variant="link">Learn more</Button>
        </p>
      </div>
      <ProductColorVariants title="Select Color" />
      <ProductSizeVariants title="Select Size" />
      <div className="py-4 space-y-4">
        <Button className="w-full" size="lg">
          Buy it Now
        </Button>
        <Button className="w-full" variant="outline" size="lg">
          Add to cart
        </Button>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        nostrum atque, officiis earum doloribus libero?
      </p>
    </>
  );
}

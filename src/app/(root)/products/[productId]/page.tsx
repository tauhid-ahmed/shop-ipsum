import { data } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/features/products/product-details";
import ProductReviewStats from "@/features/products/product-review-stats";
import ProductReviewDetails from "@/features/products/product-review-details";

type Params = {
  productId: string;
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { productId } = await params;
  const product = data.find((prod) => prod.id === productId);

  if (!product) return notFound();

  return (
    <>
      <ProductDetails product={product} />
      <ProductReviewStats product={product} />
      <ProductReviewDetails product={product} />
    </>
  );
}

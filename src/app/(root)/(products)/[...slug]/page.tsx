import { data } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/features/products/product-details";
import ProductReviewDetails from "@/features/products/product-review-details";

type Params = {
  slug: string;
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [productSlug, , productId] = slug;
  const product = data.find(
    (prod) => prod.slug === productSlug && prod.id === productId
  );

  if (!product) return notFound();

  return (
    <>
      <ProductDetails product={product} />
      <ProductReviewDetails product={product} />
    </>
  );
}

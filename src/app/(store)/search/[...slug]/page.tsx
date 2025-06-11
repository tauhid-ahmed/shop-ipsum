import { data } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/features/products/product-details";
import ProductReviewDetails from "@/features/products/product-review-details";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({ params }: Params) {
  const { slug } = await params;
  const [productSlug] = slug;
  const product = data.find((prod) => prod.slug === productSlug);

  if (!product) return notFound();

  return (
    <>
      {JSON.stringify(slug)}
      <ProductDetails product={product} />
      <ProductReviewDetails product={product} />
    </>
  );
}

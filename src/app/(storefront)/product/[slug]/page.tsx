type Props = {
  params: Promise<{ slug: string }>;
};

import { ProductDetails } from "@/components/products/";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);
  if (!product) return notFound();
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}

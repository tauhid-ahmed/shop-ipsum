import { data } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/features/products/product-details";

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
    </>
  );
}

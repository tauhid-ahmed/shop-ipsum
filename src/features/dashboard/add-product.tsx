"use client";
import { usePathname } from "next/navigation";

export function AddProduct() {
  const pathname = usePathname();
  const paths = pathname.split("/").slice(0, -1);
  return (
    <div>
      <div>{paths}</div>
      CreateNewProduct
    </div>
  );
}

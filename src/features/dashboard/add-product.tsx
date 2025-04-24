"use client";
import { usePathname } from "next/navigation";

export function AddProduct() {
  const pathname = usePathname();
  const paths = pathname.split("/").slice(0, -1);
  return (
    <div>
      <fieldset>
        <figcaption className="border rounded p-2">
          Name and Description
        </figcaption>
        <div className="p-2">
          <label htmlFor="">Product name</label>
          <input type="text" />
        </div>
      </fieldset>
    </div>
  );
}

"use client";

import { useState } from "react";

const data = [
  {
    id: 1,
    color: "red",
    sizes: [
      { id: 1, size: "S", inStock: true },
      { id: 2, size: "M", inStock: true },
      { id: 3, size: "L", inStock: true },
    ],
  },
  {
    id: 2,
    color: "black",
    sizes: [
      { id: 1, size: "S", inStock: true },
      { id: 2, size: "M", inStock: true },
      { id: 3, size: "L", inStock: true },
    ],
  },
];

export default function page() {
  const [items, setItems] = useState(data);
  return (
    <div>
      <form action="">
        {items.map((item) => (
          <div className="flex gap-10" key={item.id}>
            <div className="">
              <input type="checkbox" name="color" value={item.color} />
              {item.color}
            </div>
            <div className="flex gap-2">
              {item.sizes.map((size) => (
                <div key={size.id}>
                  <input type="checkbox" name="size" value={size.size} />
                  {size.size}
                </div>
              ))}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

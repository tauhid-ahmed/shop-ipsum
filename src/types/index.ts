import { z } from "zod";
import { productSchema } from "@/db/schemas/products";

export type ProductType = z.infer<typeof productSchema>;

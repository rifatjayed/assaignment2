import { Schema, model } from "mongoose";
import { Inventory, Product } from "./products/products.interface";

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: [
    {
      type: { type: String },
      value: { type: String },
    },
    {
      type: { type: String },
      value: { type: String },
    },
  ],
  inventory: inventorySchema,
});

export const ProductModel = model<Product>("Product", productSchema);

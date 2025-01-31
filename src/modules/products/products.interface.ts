import { Schema, model, connect } from "mongoose";

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [
    {
      type: string;
      value: string;
    },
    {
      type: string;
      value: string;
    },
  ];
  inventory: Inventory;
};

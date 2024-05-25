import { ProductModel } from "../products.model";
import { Product } from "./products.interface";

const createProductsIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductsIntoDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

export const ProductServices = {
  createProductsIntoDB,
  getAllProductsIntoDB,
  getSingleProductsIntoDB,
};

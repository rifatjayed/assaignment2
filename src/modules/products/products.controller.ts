import { Request, Response } from "express";
import { ProductServices } from "./products.service";

const createProducts = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductServices.createProductsIntoDB(productData);
    console.log(productData);

    res.status(200).json({
      success: true,
      message: "Product is created succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsIntoDB();
    res.status(200).json({
      success: true,
      message: "Product is fetched  succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const result = await ProductServices.getSingleProductsIntoDB(_id);
    res.status(200).json({
      success: true,
      message: "Product is fetched  succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductControllers = {
  createProducts,
  getAllProduct,
  getSingleProduct,
};

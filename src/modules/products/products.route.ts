import express from "express";
import { ProductControllers } from "./products.controller";

const router = express.Router();

router.post("/create-products", ProductControllers.createProducts);

router.get("/", ProductControllers.getAllProduct);

router.get("/:_id", ProductControllers.getSingleProduct);

export const ProductRoute = router;

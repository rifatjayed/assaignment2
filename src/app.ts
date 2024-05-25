// const express = require('express')
import express, { Application, Request, Response } from "express";
import cors from "cors";
// import { ProductControllers } from "./modules/products/products.controller";
import { ProductRoute } from "./modules/products/products.route";
const app: Application = express();
// const port = 3000

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);

app.get("/", (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;

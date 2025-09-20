import { Router } from "express";
import { listProductsController } from "../controllers/products.js";

export const productsRouter = Router();

productsRouter.get('/', listProductsController);

import { ProductsModel } from "../db/models/product.js";

export const getAllProducts = async () => ProductsModel.find();

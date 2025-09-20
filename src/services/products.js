import { ProductsModel } from '../db/models/Product.js';

export const getAllProducts = async () => ProductsModel.find();

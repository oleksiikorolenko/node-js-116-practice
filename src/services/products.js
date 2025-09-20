import { ProductsModel } from '../db/models/Product.js';

export const getAllProducts = async () => ProductsModel.find();

export const getProductById = async (productId) => ProductsModel.findById(productId);

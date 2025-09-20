import { ProductsModel } from '../db/models/Product.js';

export const getAllProducts = async () => ProductsModel.find();

export const getProductById = async (productId) => ProductsModel.findById(productId);

export const createProduct = async (payload) => {
    const product = await ProductsModel.create(payload);
    return product;
};
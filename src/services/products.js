import { ProductsModel } from "../db/models/product.js";

export const getAllProducts = async () => ProductsModel.find();

export const getProductById = async (productId) =>
  ProductsModel.findById(productId);

export const createProduct = async (payload) => {
  const product = await ProductsModel.create(payload);
  return product;
};

export const updateProduct = async (productId, payload) => {
  const product = await ProductsModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return product;
};

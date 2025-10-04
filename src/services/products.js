import { ProductsModel } from '../db/models/product.js';

export const getAllProducts = async (filter) => {
  const productQuery = ProductsModel.find();
  if (filter.category) {
    productQuery.where('category').equals(filter.category);
  }
  if (filter.minPrice) {
    productQuery.where('price').gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productQuery.where('price').lte(filter.maxPrice);
  }
  return productQuery;
};

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
export const deleteProduct = async (productId) => {
  const product = await ProductsModel.findByIdAndDelete({
    _id: productId,
  });
  return product;
};

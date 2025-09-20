import { Router } from 'express';
import {
  listProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/', listProductsController);

productsRouter.get('/:productId', getProductByIdController);

productsRouter.post('/', createProductController);

productsRouter.patch('/:productId', updateProductController);

productsRouter.delete('/:productId', deleteProductController);

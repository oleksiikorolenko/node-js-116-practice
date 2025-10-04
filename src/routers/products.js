import { Router } from 'express';
import {
  listProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import { productCreate } from '../validation/product.js';
import { isValidId } from '../middlewares/isValidId.js';

export const productsRouter = Router();

productsRouter.get('/', listProductsController);

productsRouter.get('/:productId', isValidId, getProductByIdController);

productsRouter.post('/', validateBody(productCreate), createProductController);

productsRouter.patch('/:productId', isValidId, validateBody(productCreate), updateProductController);

productsRouter.delete('/:productId', deleteProductController);

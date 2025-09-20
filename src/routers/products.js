import { Router } from 'express';
import { listProductsController, getProductByIdController, createProductController } from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/', listProductsController);

productsRouter.get('/:productId', getProductByIdController);

productsRouter.post('/', createProductController);
import { Router } from 'express';
import { listProductsController, getProductByIdController } from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/', listProductsController);

productsRouter.get('/:productId', getProductByIdController);

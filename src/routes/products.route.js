import express from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { productCreate, productUpdate, productDelete } from '../validators/product.validation.js';

const productsRouter = express.Router();

const productController = new ProductController();

productsRouter.post('/', productCreate, productController.create);

productsRouter.get('/', productController.findAll);

productsRouter.get('/:id', productController.findById);

productsRouter.patch('/:id', productUpdate, productController.update);

productsRouter.delete('/:id', productController.delete).use(productDelete);

export { productsRouter };
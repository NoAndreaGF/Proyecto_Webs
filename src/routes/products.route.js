import express from 'express';
import { ProductController } from '../controllers/product.controller.js';

const productsRouter = express.Router();

const productController = new ProductController();

productsRouter.post('/', productController.create);

productsRouter.get('/', productController.findAll);

productsRouter.get('/:id', productController.findById);

productsRouter.patch('/:id', productController.update);

productsRouter.delete('/:id', productController.delete);

export { productsRouter };
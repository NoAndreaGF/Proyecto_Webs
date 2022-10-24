import express from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { validationProduct } from '../validators/product.validation.js';
import { generalValidation } from '../validators/general.validation.js';

const productsRouter = express.Router();

const productController = new ProductController();

productsRouter.post('/', validationProduct, productController.create);

productsRouter.get('/', productController.findAll);

productsRouter.get('/:id', generalValidation, productController.findById);

productsRouter.patch('/:id', generalValidation, validationProduct, productController.update);

productsRouter.delete('/:id', generalValidation, productController.delete);

export { productsRouter };
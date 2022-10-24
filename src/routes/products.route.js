import express from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { productValidation } from '../validators/product.validation';
import { generalValidation } from '../validators/general.validation';

const productsRouter = express.Router();

const productController = new ProductController();

productsRouter.post('/', productValidation.productValidation, productController.create);

productsRouter.get('/', productController.findAll);

productsRouter.get('/:id', generalValidation.generalValidation, productController.findById);

productsRouter.patch('/:id', generalValidation.generalValidation, productValidation.productValidation, productController.update);

productsRouter.delete('/:id', generalValidation.generalValidation, productController.delete);

export { productsRouter };
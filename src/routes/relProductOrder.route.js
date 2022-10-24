import express from 'express';
import { RelProductOrderController } from '../controllers/relProductOrder.controller.js';
import { validationRel } from '../validators/relProductOrder.validation.js';
import { generalValidation } from '../validators/general.validation.js';

const relProductOrdersRouter = express.Router();

const relProductOrderController = new RelProductOrderController();

relProductOrdersRouter.post('/', validationRel, relProductOrderController.create);

relProductOrdersRouter.get('/', relProductOrderController.findAll);

relProductOrdersRouter.get('/:id', generalValidation, relProductOrderController.findById);

relProductOrdersRouter.patch('/:id', generalValidation, validationRel, relProductOrderController.update);

relProductOrdersRouter.delete('/:id', generalValidation, relProductOrderController.delete);

export { relProductOrdersRouter };
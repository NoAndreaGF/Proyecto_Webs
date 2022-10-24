import express from 'express';
import { RelProductOrderController } from '../controllers/relProductOrder.controller.js';
import { relProductOrderValidation } from '../validators/relProductOrder.validation';
import { generalValidation } from '../validators/general.validation';

const relProductOrdersRouter = express.Router();

const relProductOrderController = new RelProductOrderController();

relProductOrdersRouter.post('/', relProductOrderValidation.relProductOrderValidation, relProductOrderController.create);

relProductOrdersRouter.get('/', relProductOrderController.findAll);

relProductOrdersRouter.get('/:id', generalValidation.generalValidation, relProductOrderController.findById);

relProductOrdersRouter.patch('/:id', generalValidation.generalValidation, relProductOrderValidation.relProductOrderValidation, relProductOrderController.update);

relProductOrdersRouter.delete('/:id', generalValidation.generalValidation, relProductOrderController.delete);

export { relProductOrdersRouter };
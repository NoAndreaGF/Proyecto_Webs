import express from 'express';
import { RelProductOrderController } from '../controllers/relProductOrder.controller.js';
import { relCreate, relUpdate, relDelete } from '../validators/relProductOrder.validation.js';

const relProductOrdersRouter = express.Router();

const relProductOrderController = new RelProductOrderController();

relProductOrdersRouter.post('/', relCreate, relProductOrderController.create);

relProductOrdersRouter.get('/', relProductOrderController.findAll);

relProductOrdersRouter.get('/:id', relProductOrderController.findById);

relProductOrdersRouter.patch('/:id', relUpdate, relProductOrderController.update);

relProductOrdersRouter.delete('/:id', relProductOrderController.delete).use(relDelete);

export { relProductOrdersRouter };
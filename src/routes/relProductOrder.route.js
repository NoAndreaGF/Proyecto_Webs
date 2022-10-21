import express from 'express';
import { RelProductOrderController } from '../controllers/relProductOrder.controller.js';

const relProductOrdersRouter = express.Router();

const relProductOrderController = new RelProductOrderController();

relProductOrdersRouter.post('/', relProductOrderController.create);

relProductOrdersRouter.get('/', relProductOrderController.findAll);

relProductOrdersRouter.get('/:id', relProductOrderController.findById);

relProductOrdersRouter.patch('/:id', relProductOrderController.update);

relProductOrdersRouter.delete('/:id', relProductOrderController.delete);

export { relProductOrdersRouter };
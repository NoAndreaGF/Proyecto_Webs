import express from 'express';
import { OrderController } from '../controllers/order.controller.js';
import { validationOrder } from '../validators/order.validation.js';
import { generalValidation } from '../validators/general.validation.js';

const ordersRouter = express.Router();

const orderController = new OrderController();

ordersRouter.post('/', validationOrder,orderController.create);

ordersRouter.get('/', orderController.findAll);

ordersRouter.get('/:id', generalValidation, orderController.findById);

ordersRouter.patch('/:id', generalValidation, validationOrder, orderController.update);

ordersRouter.delete('/:id', generalValidation, orderController.delete);

export { ordersRouter };
import express from 'express';
import { OrderController } from '../controllers/order.controller.js';
import { orderValidation } from '../validators/order.validation.js';
import { generalValidation } from '../validators/general.validation';

const ordersRouter = express.Router();

const orderController = new OrderController();

ordersRouter.post('/', orderValidation.orderValidation,orderController.create);

ordersRouter.get('/', orderController.findAll);

ordersRouter.get('/:id', generalValidation.generalValidation, orderController.findById);

ordersRouter.patch('/:id', generalValidation.generalValidation, orderValidation.orderValidation, orderController.update);

ordersRouter.delete('/:id', generalValidation.generalValidation, orderController.delete);

export { ordersRouter };
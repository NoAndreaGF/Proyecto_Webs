import express from 'express';
import { OrderController } from '../controllers/order.controller.js';
import { inUpdate } from '../validators/in.validation.js';
import { orderCreate, orderUpdate, orderDelete } from '../validators/order.validation.js';

const ordersRouter = express.Router();

const orderController = new OrderController();

ordersRouter.get('/busqueda/:search', orderController.findBySearch);

ordersRouter.post('/', orderCreate, orderController.create);

ordersRouter.get('/', orderController.findAll);

ordersRouter.get('/:id', orderController.findById);

ordersRouter.patch('/:id', inUpdate, orderController.update);

ordersRouter.delete('/:id', orderController.delete).use(orderDelete);

export { ordersRouter };
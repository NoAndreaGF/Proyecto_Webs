import express from 'express';
import { OrderController } from '../controllers/order.controller.js';

const ordersRouter = express.Router();
ordersRouter.use(express.urlencoded({extended:true}));
ordersRouter.use(express.json());

const orderController = new OrderController();

ordersRouter.post('/', orderController.create);

ordersRouter.get('/', orderController.findAll);

ordersRouter.get('/:id', orderController.findById);

ordersRouter.patch('/:id', orderController.update);

ordersRouter.delete('/:id', orderController.delete);

export { ordersRouter };
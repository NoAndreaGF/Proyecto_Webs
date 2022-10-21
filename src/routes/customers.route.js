import express from 'express';
import { CustomerController } from '../controllers/customer.controller.js';

const customersRouter = express.Router();

const customerController = new CustomerController();

customersRouter.post('/', customerController.create);

customersRouter.get('/', customerController.findAll);

customersRouter.get('/:id', customerController.findById);

customersRouter.patch('/:id', customerController.update);

customersRouter.delete('/:id', customerController.delete);

export { customersRouter };
import express from 'express';
import { CustomerController } from '../controllers/customer.controller.js';
import { custumerCreate, custumerUpdate, custumerDelete } from '../validators/custumer.validator.js';

const customersRouter = express.Router();
const customerController = new CustomerController();

customersRouter.post('/', custumerCreate, customerController.create);

customersRouter.get('/busqueda/:search',customerController.findBySearch)

customersRouter.get('/', customerController.findAll);

customersRouter.get('/:id', customerController.findById);

customersRouter.patch('/:id', custumerUpdate, customerController.update);

customersRouter.delete('/:id', customerController.delete).use(custumerDelete);

export { customersRouter };
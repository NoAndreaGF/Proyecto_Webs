import express from 'express';
import { CustomerController } from '../controllers/customer.controller.js';
import { validationCostumer } from '../validators/costumer.validator.js';
import { generalValidation } from '../validators/general.validation.js';

const customersRouter = express.Router();
const customerController = new CustomerController();

customersRouter.post('/', validationCostumer, customerController.create);

customersRouter.get('/', customerController.findAll);

customersRouter.get('/:id', generalValidation, customerController.findById);

customersRouter.patch('/:id', generalValidation,validationCostumer, customerController.update);

customersRouter.delete('/:id', generalValidation, customerController.delete);

export { customersRouter };
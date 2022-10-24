import express from 'express';
import { CustomerController } from '../controllers/customer.controller.js';
import { validationCostumer } from '../validators/validationCostumer';
import { generalValidation } from '../validators/general.validation';

const customersRouter = express.Router();
const customerController = new CustomerController();

customersRouter.post('/', validationCostumer.validationCostumer, customerController.create);

customersRouter.get('/', customerController.findAll);

customersRouter.get('/:id', generalValidation.generalValidation, customerController.findById);

customersRouter.patch('/:id', generalValidation.generalValidation,validationCostumer.validationCostumer, customerController.update);

customersRouter.delete('/:id', generalValidation.generalValidation, customerController.delete);

export { customersRouter };
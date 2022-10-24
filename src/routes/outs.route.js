import express from 'express';
import { OutController } from '../controllers/out.controller.js';
import { validationOut } from '../validators/out.validation.js';
import { generalValidation } from '../validators/general.validation.js';

const outsRouter = express.Router();

const outController = new OutController();

outsRouter.post('/', validationOut, outController.create);

outsRouter.get('/', outController.findAll);

outsRouter.get('/:id', generalValidation, outController.findById);

outsRouter.patch('/:id', generalValidation, validationOut, outController.update);

outsRouter.delete('/:id', generalValidation, outController.delete);

export { outsRouter };
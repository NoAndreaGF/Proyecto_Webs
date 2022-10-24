import express from 'express';
import { OutController } from '../controllers/out.controller.js';
import { outValidation } from '../validators/out.validation.js';
import { generalValidation } from '../validators/general.validation';

const outsRouter = express.Router();

const outController = new OutController();

outsRouter.post('/', outValidation.outValidation, outController.create);

outsRouter.get('/', outController.findAll);

outsRouter.get('/:id', generalValidation.generalValidation, outController.findById);

outsRouter.patch('/:id', generalValidation.generalValidation, outValidation.outValidation, outController.update);

outsRouter.delete('/:id', generalValidation.generalValidation, outController.delete);

export { outsRouter };
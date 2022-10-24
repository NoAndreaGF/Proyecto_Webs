import express from 'express';
import { InController } from '../controllers/in.controller.js';
import { validationIn } from '../validators/in.validation.js';
import { generalValidation } from '../validators/general.validation.js';

const insRouter = express.Router();

const inController = new InController();

insRouter.post('/', validationIn, inController.create);

insRouter.get('/', inController.findAll);

insRouter.get('/:id', generalValidation, inController.findById);

insRouter.patch('/:id', generalValidation, validationIn, inController.update);

insRouter.delete('/:id', generalValidation, inController.delete);

export { insRouter };
import express from 'express';
import { InController } from '../controllers/in.controller.js';
import { InValidation } from '../validators/validationIn';
import { generalValidation } from '../validators/general.validation';

const insRouter = express.Router();

const validationIn = new InValidation();
const inController = new InController();

insRouter.post('/', validationIn.validationIn, inController.create);

insRouter.get('/', inController.findAll);

insRouter.get('/:id', generalValidation.generalValidation, inController.findById);

insRouter.patch('/:id', generalValidation.generalValidation, validationIn.validationIn, inController.update);

insRouter.delete('/:id', generalValidation.generalValidation, inController.delete);

export { insRouter };
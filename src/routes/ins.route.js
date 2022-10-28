import express from 'express';
import { InController } from '../controllers/in.controller.js';
import { inCreate, inUpdate, inDelete } from '../validators/in.validation.js';

const insRouter = express.Router();

const inController = new InController();

insRouter.post('/', inCreate, inController.create);

insRouter.get('/', inController.findAll);

insRouter.get('/:id', inController.findById);

insRouter.patch('/:id', inUpdate, inController.update);

insRouter.delete('/:id', inController.delete).use(inDelete);

export { insRouter };
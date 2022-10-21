import express from 'express';
import { InController } from '../controllers/in.controller.js';

const insRouter = express.Router();

const inController = new InController();

insRouter.post('/', inController.create);

insRouter.get('/', inController.findAll);

insRouter.get('/:id', inController.findById);

insRouter.patch('/:id', inController.update);

insRouter.delete('/:id', inController.delete);

export { insRouter };
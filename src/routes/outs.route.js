import express from 'express';
import { OutController } from '../controllers/out.controller.js';

const outsRouter = express.Router();

const outController = new OutController();

outsRouter.post('/', outController.create);

outsRouter.get('/', outController.findAll);

outsRouter.get('/:id', outController.findById);

outsRouter.patch('/:id', outController.update);

outsRouter.delete('/:id', outController.delete);

export { outsRouter };
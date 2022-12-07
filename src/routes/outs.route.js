import express from 'express';
import { OutController } from '../controllers/out.controller.js';
import { outCreate, outUpdate, outDelete } from '../validators/out.validation.js';

const outsRouter = express.Router();

const outController = new OutController();

outsRouter.post('/', outCreate, outController.create);

outsRouter.get('/busqueda/:search',outController.findBySearch);

outsRouter.get('/', outController.findAll);

outsRouter.get('/:id', outController.findById);

outsRouter.patch('/:id', outUpdate, outController.update);

outsRouter.delete('/:id', outController.delete).use(outDelete);

export { outsRouter };
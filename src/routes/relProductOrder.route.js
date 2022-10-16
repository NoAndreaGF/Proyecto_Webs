import express from 'express';
import { RelProductOrderController } from '../controllers/relProductOrder.controller.js';

const relProductOrdersRouter = express.Router();
relProductOrdersRouter.use(express.urlencoded({extended:true}));
relProductOrdersRouter.use(express.json());

const relProductOrderController = new RelProductOrderController();

relProductOrdersRouter.post('/', relProductOrderController.create);

relProductOrdersRouter.get('/', relProductOrderController.findAll);

relProductOrdersRouter.get('/:id', relProductOrderController.findById);

relProductOrdersRouter.patch('/:id', relProductOrderController.update);

relProductOrdersRouter.delete('/:id', relProductOrderController.delete);

export { relProductOrdersRouter };
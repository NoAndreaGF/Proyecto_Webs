import express from 'express';
import { UserController } from '../controllers/user.controller.js';

const usersRouter = express.Router();
usersRouter.use(express.urlencoded({extended:true}));
usersRouter.use(express.json());

const userController = new UserController();

usersRouter.get('/verify', userController.verify);

usersRouter.post('/', userController.create);

usersRouter.get('/', userController.findAll);

usersRouter.get('/:id', userController.findById);

usersRouter.patch('/:id', userController.update);

usersRouter.delete('/:id', userController.delete);



export { usersRouter };
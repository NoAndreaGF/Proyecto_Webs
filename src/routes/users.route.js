import express from 'express';
import { UserController } from '../controllers/user.controller.js';
import { user, userUpdate, userDelete } from '../validators/user.validation.js';

const usersRouter = express.Router();

const userController = new UserController();

usersRouter.post('/verify', user, userController.verify);

usersRouter.post('/', user, userController.create);

usersRouter.get('/', userController.findAll);

usersRouter.get('/:id', userController.findById);

usersRouter.patch('/:id', userUpdate, userController.update);

usersRouter.delete('/:id', userController.delete).use(userDelete);

export { usersRouter };
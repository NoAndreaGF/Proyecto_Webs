import express from 'express';
import { UserController } from '../controllers/user.controller.js';
import { validationUser } from '../validators/user.validator.js';
import { generalValidation } from '../validators/general.validation';

const usersRouter = express.Router();

const userController = new UserController();

usersRouter.get('/verify', userController.verify);

usersRouter.post('/', validationUser.validationUser, userController.create);

usersRouter.get('/', userController.findAll);

usersRouter.get('/:id', generalValidation.generalValidation, userController.findById);

usersRouter.patch('/:id', generalValidation.generalValidation, validationUser.validationUser, userController.update);

usersRouter.delete('/:id', generalValidation.generalValidation, userController.delete);

export { usersRouter };
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import ensureAdmin from '../middlewares/ensureAdmin';
import ensureLoggedIn from '../middlewares/isLoggedIn';

export const userRouter = Router();

const controller = new UserController();

userRouter.get('/', ensureAdmin, controller.getAll);
userRouter.get('/profile', controller.getProfile);

import Router from 'express';
import UserController from './UserController.js';

const userRouter = new Router();

userRouter.post('/profiles', UserController.create);

userRouter.get('/profiles/:id', UserController.getInfo);

userRouter.put('/profiles', UserController.update);

userRouter.delete('/profiles/:id', UserController.delete);

export default userRouter;

import Router from 'express';
import UserController from './UserController.js';

const userRouter = new Router();

userRouter.post('/profiles', UserController.create);

//not implement getAll because we haven't got an admin
//and user can't show all profiles

userRouter.get('/profiles/:id', UserController.getInfo);

userRouter.put('/profiles/:id', UserController.update);

userRouter.delete('/profiles/:id', UserController.delete);

export default userRouter;

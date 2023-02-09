import express from 'express';
import router from './resources/cities/Router.js';
import userRouter from './userRouter.js';

export default function middleware() {
  const app = express();

  app.use(express.json());
  app.use('/api', router);
  app.use('/api', userRouter); // for users routing
}

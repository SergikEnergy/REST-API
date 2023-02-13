import express from 'express';
import cors from 'cors';

import router from './resources/cities/Router.js';
import userRouter from './resources/profiles/userRouter.js';
import eventRouter from './resources/events/eventRouter.js';
import placeRouter from './resources/places/placeRouter.js';
import authRouter from './resources/authorization/authRouter.js';

import fileUpload from 'express-fileupload';

import connectDB from './connectDB.js';

const PORT = 5000;

const app = express();

// const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];
// const corsOptions = {
//   origin: allowedOrigins,
// };
// app.use(cors(corsOptions));

app.use(cors()); //allow all CORS
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);
app.use('/api', userRouter);
app.use('/api', eventRouter);
app.use('/api', placeRouter);
app.use('/api', authRouter);

async function startApp() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log('server is running ... on localhost: ' + PORT);
    });
  } catch (error) {
    console.log(error);
    console.log('server start with error');
  }
}
startApp();

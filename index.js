import express from 'express';
import router from './resources/cities/Router.js';
import middleware from './app.js';
import userRouter from './resources/profiles/userRouter.js';
import connectDB from './connectDB.js';

const PORT = 5000;

// const server = express();
const app = express();

app.use(express.json());
// middleware();
app.use('/api', router);
app.use('/api', userRouter);

async function startApp() {
  try {
    await connectDB();
    // middleware();

    app.listen(PORT, () => {
      console.log('server is running ... on localhost:' + PORT);
    });
  } catch (error) {
    console.log(error);
    console.log('server start with error');
  }
}
startApp();

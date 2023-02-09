import express from 'express';
import middleware from './app.js';
import connectDB from './connectDB.js';

const PORT = 5000;

const server = express();

middleware();

async function startApp() {
  try {
    await connectDB();

    server.listen(PORT, () => {
      console.log('server is running...');
    });
  } catch (error) {
    console.log(error);
    console.log('server start with error');
  }
}
startApp();

import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    const DEV_DB_URL = 'mongodb+srv://testtesttest:Test1234Test@clusterfirst.l8amfjw.mongodb.net/GoSportBase';
    // const MONGO_DB=process.env.MONGO_DB_URL || DEV_DB_URL;

    mongoose.set('strictQuery', false);
    await mongoose.connect(DEV_DB_URL);
    console.log('connect to mongoDB is successful...');
  } catch (e) {
    console.log(e, 'failed connection to mongoDB... check your data.');
  }
}

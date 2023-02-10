import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default async function connectDB() {
  try {
    const DB_URL = 'mongodb+srv://testtesttest:Test1234Test@clusterfirst.l8amfjw.mongodb.net/GoSportBase';
    const MONGO_DB = process.env.MONGO_DB_URL || DB_URL;

    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('connect to mongoDB is successful...');
  } catch (e) {
    console.log(e, 'failed connection to mongoDB... check your data.');
    // throw new Error('failed connection to mongoDB');
  }
}

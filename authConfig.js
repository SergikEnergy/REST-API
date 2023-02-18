import dotenv from 'dotenv';
dotenv.config();

const authParams = {
  secret: process.env.SECRET_KEY,
  cookies_key: 'session_id',
};

export default authParams;

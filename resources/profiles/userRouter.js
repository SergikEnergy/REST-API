import Router from 'express';
import { authMiddleware } from '../../authMiddleware.js';

import jwt from 'jsonwebtoken';
import authParams from '../../authConfig.js';
const { secret, cookies_key } = authParams;

import { check, validationResult } from 'express-validator';
import UserController from './UserController.js';

const userRouter = new Router();

const generateAccessToken = (username) => {
  let payload = {
    username: username,
  };
  let token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

//register request
userRouter.post(
  '/profiles',
  [
    check('nickName', 'UserName must not be empty.').notEmpty(),
    check('password', 'Password must include more than 4 and less than 10 symbols').isLength({
      min: 4,
      max: 10,
    }),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ err: 'Error by validation input dates', errors });
      }
      const body = req.body;
      const file = req.files && req.files.avatar ? req.files.avatar : '';
      const newUser = await UserController.create(body, file);
      return res.status(200).json(newUser);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY CREATING USER AND REGISTRATION');
    }
  }
);
//login request
userRouter.post(
  '/login',
  [
    check('nickName', 'UserName must not be empty.').notEmpty(),
    check('password', 'Password must include more than 4 and less than 10 symbols').isLength({
      min: 4,
      max: 10,
    }),
  ],
  async (req, res, next) => {
    try {
      const body = req.body;
      //body - 2 fields nickName and password
      const user = await UserController.logIn(body);
      // if (user && user[0].nickName) {
      //   let token = generateAccessToken(user[0].nickName);
      //   res.cookie(cookies_key, token);
      // }

      return res.status(200).json(user);
    } catch (err) {
      let errorObj = { error: err.message, data: 'failed login' };
      res.status(500).json(errorObj);
      console.log('Login error...');
    }
  }
);

//not implement getAll because we haven't got an admin
//and user can't show all profiles

userRouter.get('/list', authMiddleware, async function (req, res, next) {
  let data = [
    { name: 'Silent Hill', year: '1998' },
    { name: 'Hitman 2', year: '2008' },
    { name: 'HOMM3', year: '1999' },
    { name: 'Kazaki', year: '2002' },
  ];
  res.send(JSON.stringify(data));
});

userRouter.get('/profiles/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await UserController.getInfo(id);
    return res.status(200).json(user);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTTING USER wit ID');
  }
});

userRouter.put('/profiles/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const file = req.files ? req.files : '';
    const updatedUser = await UserController.update(id, body, file);
    return res.status(200).json(updatedUser);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY UPDATING USER INFO');
  }
});

userRouter.delete('/profiles/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = await UserController.delete(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY DELETING');
  }
});

export default userRouter;

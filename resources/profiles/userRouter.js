import Router from 'express';
import UserController from './UserController.js';

const userRouter = new Router();

//register request
userRouter.post('/profiles', async (req, res, next) => {
  try {
    const body = req.body;
    const file = req.files && req.files.avatar ? req.files.avatar : '';
    console.log(file);
    const newUser = await UserController.create(body, file);
    return res.status(200).json(newUser);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY CREATING USER AND REGISTRATION');
  }
});
//login request
userRouter.get('/login', async (req, res, next) => {
  try {
    const body = req.body;
    //body - 2 fields userName and password
    const user = await UserController.logIn(body);
    return res.status(200).json(user);
  } catch (err) {
    let errorObj = { error: err.message, data: 'failed login' };
    res.status(500).json(errorObj);
    console.log('Login error...');
  }
});

//not implement getAll because we haven't got an admin
//and user can't show all profiles

userRouter.get('/profiles/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = UserController.getInfo(id);
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

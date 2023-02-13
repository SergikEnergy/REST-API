import Router from 'express';

const authRouter = new Router();

authRouter.post('/registration', async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    // const candidate = await
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('Registration error...');
  }
});
authRouter.post('/login', async (req, res, next) => {
  try {
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('Login error...');
  }
});
authRouter.get('/users', async (req, res, next) => {
  try {
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('Getting all users failed');
  }
});

export default authRouter;

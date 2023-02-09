import UserService from './UserService.js';

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      console.log(req.body);
      res.json(user);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY CREATING USER');
    }
  }

  async getInfo(req, res) {
    try {
      const id = req.params.id;
      const currentUser = await UserService.getInfo(id);
      return res.json(currentUser);
    } catch (error) {
      console.log(error);
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTTING USER wit ID');
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedUser = await UserService.update(id, req.body);
      return res.json(updatedUser);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY UPDATING');
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const user = await UserService.delete(id);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY DELETING');
    }
  }
}

export default new UserController();

import Profile from './Profile.js';

class UserController {
  async create(req, res) {
    try {
      const { coach, player, events, personal_data, urlsToImg } = req.body;
      const user = await Profile.create({ coach, player, events, personal_data, urlsToImg });
      console.log(req.body);
      console.log(res.status);
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
      if (!id) {
        return res.status(400).json({ message: 'ID not found', data: false });
      }
      const currentUser = await Profile.findById(id);
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
      const user = req.body;
      if (!user._id) {
        return res.status(400).json({ message: 'ID checked user not found', data: false });
      }
      const updatedUser = await Profile.findByIdAndUpdate(user._id, user, { new: true });
      return res.json(updatedUser);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY UPDATING');
    }
  }
  async delete(req, res) {
    try {
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY DELETING');
    }
  }
}

export default new UserController();

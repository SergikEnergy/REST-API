import UserService from './UserService.js';

class UserController {
  async create(body, file) {
    const user = await UserService.create(body, file);
    return user;
  }

  async getInfo(id) {
    const currentUser = await UserService.getInfo(id);
    return currentUser;
  }

  async logIn(body) {
    const checkUser = await UserService.logIn(body);
    return checkUser;
  }

  async update(id, body, file) {
    const updatedUser = await UserService.update(id, body, file);
    return updatedUser;
  }

  async delete(id) {
    const user = await UserService.delete(id);
    return user;
  }
}

export default new UserController();

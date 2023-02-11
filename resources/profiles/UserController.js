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

  async update(id, body) {
    const updatedUser = await UserService.update(id, body);
    return updatedUser;
  }

  async delete(id) {
    const user = await UserService.delete(id);
    return user;
  }
}

export default new UserController();

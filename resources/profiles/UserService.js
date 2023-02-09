import Profile from './Profile.js';

class UserService {
  async create(user) {
    const isExist = await this.checkExisting(user);
    if (isExist.length === 0) {
      const createdUser = await Profile.create(user);
      return createdUser;
      b;
    } else return { error: 'this user already exists in database' };
  }

  async getInfo(id) {
    if (!id) {
      throw new Error('You do not show id');
    }
    const currentUser = await Profile.findById(id);
    return currentUser;
  }

  async update(id, user) {
    if (!id) {
      throw new Error('You do not show id');
    }
    const updatedUser = await Profile.findByIdAndUpdate(id, user, { new: true });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error('You do not insert id');
    }
    const user = await Profile.findByIdAndDelete(id);
    return user;
  }

  async checkExisting(user) {
    const checkUser = await Profile.find({ nick_name: `${user.nick_name}` });
    return checkUser;
  }
}

export default new UserService();

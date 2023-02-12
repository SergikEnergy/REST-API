import Profile from './Profile.js';
import FileService from './FileService.js';

class UserService {
  async create(user, avatar) {
    const isExist = await this.checkExisting(user);
    if (isExist.length === 0) {
      if (!avatar) {
        const createdUser = await Profile.create({ ...user, avatar: 'default avatar.png' });
        return createdUser;
      }
      const fileName = FileService.saveFile(user.nickName, avatar);
      const createdUser = await Profile.create({ ...user, avatar: fileName });
      return createdUser;
    } else return { error: 'this user already exists in database' };
  }

  async getInfo(id) {
    if (!id) {
      throw new Error('You do not show id');
    }
    const currentUser = await Profile.findById(id);
    return currentUser;
  }

  async update(id, user, file = '') {
    if (!id) {
      throw new Error('You do not show id');
    }
    const previousImg = await this.getInfo(id);
    if (!file) {
      const updatedUser = await Profile.findByIdAndUpdate(id, user, { new: true });
      return updatedUser;
    } else {
      const fileName = FileService.updateFile(user.nickName, file, previousImg.avatar);
      const updatedUser = await Profile.findByIdAndUpdate(id, { ...user, avatar: fileName }, { new: true });
      return updatedUser;
    }
  }

  async delete(id) {
    if (!id) {
      throw new Error('You do not insert id');
    }
    const user = await Profile.findByIdAndDelete(id);
    return user;
  }

  async checkExisting(user) {
    const checkUser = await Profile.find({ nickName: `${user.nickName}` });
    return checkUser;
  }
}

export default new UserService();

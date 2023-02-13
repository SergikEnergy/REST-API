import Profile from './Profile.js';
import FileService from './FileService.js';
import PasswordHandler from './password.js';

class UserService {
  async create(user, avatar) {
    const userName = user.nickName;
    const isExist = await this.checkExisting(user);
    if (isExist.length !== 0) {
      return {
        message: 'User with such name already exists...',
        data: false,
      };
    }
    //code password with jwt library
    const password = PasswordHandler.codePass(user.password);
    user.password = password;
    if (isExist.length === 0) {
      if (!avatar) {
        const createdUser = await Profile.create({ ...user, avatar: 'defaultAvatar.png' });
        return createdUser;
      }
      const fileName = FileService.saveFile(user.nickName, avatar);
      const createdUser = await Profile.create({ ...user, avatar: fileName });
      return createdUser;
    }
  }

  async getInfo(id) {
    if (!id) {
      throw new Error('You do not show id');
    }
    const currentUser = await Profile.findById(id);
    return currentUser;
  }

  async logIn(user) {
    const currentUser = this.checkExisting(user);
    if (!currentUser && currentUser.nickName) {
      return { error: 'user dos not exists on database' };
    }
    const { nickName, password } = user;
    const foundedUser = await Profile.find({ nickName: `${nickName}` });
    if (foundedUser.length === 0) {
      return { error: 'user dos not exists on database', data: 'userName' };
    }
    //compare two passwords and return user's dates
    const passwordFromBase = PasswordHandler.decodePass(foundedUser[0].password);
    if (password === passwordFromBase) {
      return foundedUser;
    }
    if (password !== passwordFromBase) {
      return { err: `you typed incorrect password`, data: 'password' };
    }
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

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class PasswordHandler {
  codePass(userPassword) {
    const obj = { password: userPassword };
    const secretWord = process.env.HIDE_PASSWORD || 'MyFamily123';
    const passHash = jwt.sign(obj, secretWord);
    return passHash;
  }

  decodePass(hashPassword) {
    try {
      const secretWord = process.env.HIDE_PASSWORD || 'MyFamily123';
      const pass = jwt.verify(hashPassword, secretWord, (err, user) => {
        if (err) throw new Error('password is incorrect');
        return user;
      });
      return pass.password;
    } catch (e) {
      return { message: e.message, data: 'error by verifying password' };
    }
  }
}

export default new PasswordHandler();

//here you can try decode pass
// const a = new PasswordHandler();
// const str =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InRlc3QxIiwiaWF0IjoxNjc2MjkwNzMwfQ.xxTbKUS2e6QkdDtMUuoJkTMgwzzayD6dln0is_gI9jo';
// console.log(a.decodePass(str));

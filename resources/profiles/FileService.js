import * as path from 'path';
import * as fs from 'fs';

class FileService {
  saveFile(name, file) {
    try {
      const ext = file.mimetype.replace('image/', '.');
      const fileName = name + `${ext}`;
      const pathToFile = path.resolve('static', fileName);
      file.mv(pathToFile);
      return fileName;
    } catch (e) {
      console.log('ERROR BY WRITING FILE');
      return { error: e.message };
    }
  }
  updateFile(name, file, oldFileName) {
    try {
      const ext = file.files.mimetype.replace('image/', '.');
      const fileName = name + `${ext}`;
      const pathToFile = path.resolve('static', fileName);
      const pathToOldFile = path.resolve('static', oldFileName);
      if (oldFileName !== 'defaultAvatar.png') {
        fs.unlink(pathToOldFile, (err) => {
          if (err) {
            console.log(err, 'error by deleting file');
          }
        });
        file.files.mv(pathToFile);
      }
      return fileName;
    } catch (e) {
      console.log('ERROR BY UPDATING FILE');
      return { error: e.message };
    }
  }
}
export default new FileService();

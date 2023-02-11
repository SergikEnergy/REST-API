import * as uuid from 'uuid';
import * as path from 'path';

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
  updateFile(file, id) {}
}
export default new FileService();

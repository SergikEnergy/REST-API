import City from './City.js';

class CityService {
  async create(city) {
    const isExist = await this.checkExisting(city);
    if (isExist.length === 0) {
      const createdCity = await City.create(city);
      return createdCity;
    } else return { error: 'this city already exists in database' };
  }

  async getAll() {
    const cities = await City.find();
    return cities;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('You do not show id');
    }

    const uniqueCity = await City.findById(id);
    return uniqueCity;
  }

  async update(id, city) {
    if (!id) {
      throw new Error('You do not select city');
    }
    const updatedCity = await City.findByIdAndUpdate(id, city, { new: true });
    return updatedCity;
  }

  async delete(id) {
    if (!id) {
      throw new Error('You do not insert id');
    }
    const city = await City.findByIdAndDelete(id);
    return city;
  }
  async checkExisting(city) {
    const checkCity = await City.find({ name: `${city.name}` });
    return checkCity;
  }
}

export default new CityService();

import City from './City.js';

class CityService {
  async create(city) {
    const createdCity = await City.create(city);
    return createdCity;
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

  async update(city) {
    if (!city._id) {
      throw new Error('You do not insert city');
    }
    const updatedCity = await City.findByIdAndUpdate(city._id, city, { new: true });
    return updatedCity;
  }

  async delete(id) {
    if (!id) {
      throw new Error('You do not insert id');
    }
    const city = await City.findByIdAndDelete(id);
    return city;
  }
}

export default new CityService();

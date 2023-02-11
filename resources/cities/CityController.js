import CityService from './CityService.js';

class CityController {
  async create(body) {
    const city = await CityService.create(body);
    return city;
  }

  async getAll() {
    const cities = await CityService.getAll();
    return cities;
  }

  async getOne(id) {
    const uniqueCity = await CityService.getOne(id);
    return uniqueCity;
  }

  async update(id, body) {
    const updatedCity = await CityService.update(id, body);
    return updatedCity;
  }

  async delete(id) {
    const city = await CityService.delete(id);
    return city;
  }
}

export default new CityController();

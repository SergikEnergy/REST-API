import City from './City.js';
import CityService from './CityService.js';

class CityController {
  async create(req, res) {
    try {
      const city = await CityService.create(req.body);
      // console.log(req.body);
      // console.log(res.status);
      return city;
      // res.json(city);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY CREATING CITY');
    }
  }

  async getAll(req, res) {
    try {
      const cities = await CityService.getAll();
      return res.status(200).json(cities);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTING ALL CITIES');
    }
  }

  async getOne(req, res) {
    try {
      const uniqueCity = await CityService.getOne(req.params.id);
      return res.json(uniqueCity);
    } catch (error) {
      // console.log(error);
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTING CITY with ID');
    }
  }
  async update(req, res) {
    try {
      const updatedCity = await CityService.update(req.body);
      return res.json(updatedCity);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY UPDATING CITY');
    }
  }

  async delete(req, res) {
    try {
      const city = await CityService.delete(req.params.id);
      return res.status(200).json(city);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY DELETING CITY');
    }
  }
}

export default new CityController();

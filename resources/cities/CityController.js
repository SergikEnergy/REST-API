import CityService from './CityService.js';

class CityController {
  async create(req, res) {
    try {
      const city = await CityService.create(req.body);
      return res.json(city);
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
      const id = req.params.id;
      const uniqueCity = await CityService.getOne(id);
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
      const id = req.params.id;
      const updatedCity = await CityService.update(id, req.body);
      return res.json(updatedCity);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY UPDATING CITY');
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const city = await CityService.delete(id);
      return res.status(200).json(city);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY DELETING CITY');
    }
  }
}

export default new CityController();

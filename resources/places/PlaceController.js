import PlaceService from './PlaceService.js';

class PlaceController {
  async create(req, res) {
    try {
      const place = await PlaceService.create(req.body);
      return res.json(place);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY CREATING PLACE');
    }
  }

  async getAll(req, res) {
    try {
      const places = await PlaceService.getAll();
      return res.status(200).json(places);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTING ALL PLACES');
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const uniquePlace = await PlaceService.getOne(id);
      return res.json(uniquePlace);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTING PLACE with ID');
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedPlace = await PlaceService.update(id, req.body);
      return res.json(updatedPlace);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY UPDATING PLACE');
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const place = await PlaceService.delete(id);
      return res.status(200).json(place);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY DELETING PLACE');
    }
  }
}

export default new PlaceController();

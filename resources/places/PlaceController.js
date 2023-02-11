import PlaceService from './PlaceService.js';

class PlaceController {
  async create(body) {
    const place = await PlaceService.create(body);
    return place;
  }

  async getAll() {
    const places = await PlaceService.getAll();
    return res.status(200).json(places);
  }

  async getOne(id) {
    const uniquePlace = await PlaceService.getOne(id);
    return uniquePlace;
  }

  async update(id, body) {
    const updatedPlace = await PlaceService.update(id, body);
    return updatedPlace;
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

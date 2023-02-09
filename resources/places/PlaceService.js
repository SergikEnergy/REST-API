import Place from './Place.js';

class PlaceService {
  async create(place) {
    const isExist = await this.checkExisting(place);
    if (isExist.length === 0) {
      const createdPlace = await Place.create(place);
      return createdPlace;
    } else return { error: 'this place already exists in database' };
  }

  async getAll() {
    const places = await Place.find();
    return places;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('You do not show id');
    }

    const uniquePlace = await Place.findById(id);
    return uniquePlace;
  }

  async update(id, event) {
    if (!id) {
      throw new Error('You do not select place');
    }
    const updatedPlace = await Place.findByIdAndUpdate(id, event, { new: true });
    return updatedPlace;
  }

  async delete(id) {
    if (!id) {
      throw new Error('You do not insert id');
    }
    const place = await Place.findByIdAndDelete(id);
    return place;
  }
  async checkExisting(place) {
    const checkPlace = await Place.find({
      name: `${place.name}`,
      coordinates: {
        latitude: `${place.coordinates.latitude}`,
        longitude: `${place.coordinates.longitude}`,
      },
    });
    return checkPlace;
  }
}

export default new PlaceService();

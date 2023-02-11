import Router from 'express';
import PlaceController from './PlaceController.js';

const placeRouter = new Router();

placeRouter.post('/places', async (req, res, next) => {
  try {
    const body = req.body;
    const createdPlace = await PlaceController.create(body);
    return res.status(200).json(createdPlace);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY CREATING PLACE');
  }
});

placeRouter.get('/places', async (req, res, next) => {
  try {
    const places = await PlaceController.getAll();
    return res.json(places);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTING ALL PLACES');
  }
});

placeRouter.get('/places/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const place = await PlaceController.getOne(id);
    return res.json(place);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTING PLACE with ID');
  }
});

placeRouter.put('/places/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const place = await PlaceController.update(id, body);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY UPDATING PLACE');
  }
});

placeRouter.delete('/places/:id', PlaceController.delete);

export default placeRouter;

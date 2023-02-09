import Router from 'express';
import PlaceController from './PlaceController.js';

const placeRouter = new Router();

placeRouter.post('/places', PlaceController.create);

placeRouter.get('/places', PlaceController.getAll);

placeRouter.get('/places/:id', PlaceController.getOne);

placeRouter.put('/places/:id', PlaceController.update);

// placeRouter.delete('/places/:id', PlaceController.delete);

export default placeRouter;

import Router from 'express';
import CityController from './CityController.js';

const router = new Router();

router.post('/cities', CityController.create);

router.get('/cities', CityController.getAll);

router.get('/cities/:id', CityController.getOne);

router.put('/cities/:id', CityController.update);

router.delete('/cities/:id', CityController.delete);

export default router;

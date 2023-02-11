import Router from 'express';
import CityController from './CityController.js';

const router = new Router();

router.post('/cities', async (req, res, next) => {
  try {
    const newCity = await CityController.create(req.body);
    return res.json(newCity);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY CREATING CITY');
  }
});

router.get('/cities', async (req, res, next) => {
  try {
    const cities = await CityController.getAll();
    return res.status(200).json(cities);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTING ALL CITIES');
  }
});

router.get('/cities/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const city = await CityController.getOne(id);
    return res.status(200).json(city);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTING CITY with ID');
  }
});

router.put('/cities/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedCity = await CityController.update(id, body);
    return res.status(200).json(updatedCity);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY UPDATING CITY');
  }
});

router.delete('/cities/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedCity = await CityController.delete(id);
    return res.status(200).json(deletedCity);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY DELETING CITY');
  }
});

export default router;

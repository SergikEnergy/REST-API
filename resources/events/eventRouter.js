import Router from 'express';
import EventController from './EventController.js';

const eventRouter = new Router();

eventRouter.post('/events', async (req, res, next) => {
  try {
    const newEvent = await EventController.create(req.body);
    return res.json(newEvent);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY CREATING EVENT');
  }
});

eventRouter.get('/events', async (req, res, next) => {
  try {
    const events = EventController.getAll();
    return req.json(events);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTING ALL EVENTS');
  }
});

eventRouter.get('/events/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await EventController.getOne(id);
    return res.status(200).json(event);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY GETTING EVENT with ID');
  }
});

eventRouter.put('/events/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const deletedCity = await EventController.update(id, body);
    return res.json(deletedCity);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY UPDATING EVENT');
  }
});

/*eventRouter.delete('/events/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedEvent = await EventController.delete(id);
    return res.json(deletedEvent);
  } catch (error) {
    let errorObj = { error: error.message, data: false };
    res.status(500).json(errorObj);
    console.log('ERROR BY DELETING EVENT');
  }
});*/

export default eventRouter;

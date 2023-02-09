import Router from 'express';
import EventController from './EventController.js';

const eventRouter = new Router();

eventRouter.post('/events', EventController.create);

eventRouter.get('/events', EventController.getAll);

eventRouter.get('/events/:id', EventController.getOne);

eventRouter.put('/events/:id', EventController.update);

// eventRouter.delete('/events/:id', EventController.delete);

export default eventRouter;

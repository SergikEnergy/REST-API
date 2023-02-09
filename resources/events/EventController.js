import EventService from './EventService.js';

class EventController {
  async create(req, res) {
    try {
      const event = await EventService.create(req.body);
      return res.json(event);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY CREATING EVENT');
    }
  }

  async getAll(req, res) {
    try {
      const events = await EventService.getAll();
      return res.status(200).json(events);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTING ALL EVENTS');
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const uniqueEvent = await EventService.getOne(id);
      return res.json(uniqueEvent);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY GETTING EVENT with ID');
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedEvent = await EventService.update(id, req.body);
      return res.json(updatedEvent);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY UPDATING EVENT');
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const event = await EventService.delete(id);
      return res.status(200).json(event);
    } catch (error) {
      let errorObj = { error: error.message, data: false };
      res.status(500).json(errorObj);
      console.log('ERROR BY DELETING EVENT');
    }
  }
}

export default new EventController();

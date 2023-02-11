import EventService from './EventService.js';

class EventController {
  async create(body) {
    const event = await EventService.create(body);
    return event;
  }

  async getAll() {
    const events = await EventService.getAll();
    return events;
  }

  async getOne(id) {
    const uniqueEvent = await EventService.getOne(id);
    return uniqueEvent;
  }

  async update(id, body) {
    const updatedEvent = await EventService.update(id, body);
    return updatedEvent;
  }

  async delete(id) {
    const event = await EventService.delete(id);
    return event;
  }
}

export default new EventController();

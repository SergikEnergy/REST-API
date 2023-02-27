import Event from './Event.js';

class EventService {
  async create(event) {
    const isExist = await this.checkExisting(event);
    if (isExist.length === 0) {
      const createdEvent = await Event.create(event);
      return createdEvent;
    } else return { error: 'this event already exists in database' };
  }

  async getAll(params) {
    if (params.dateevent && params.restplayers && params.kind) {
      const events = await Event.find({
        date: params.dateevent,
        kind: params.kind,
        rest_players: { $gt: Number(params.restplayers) - 1 },
      });
      return events;
    } else if (params.dateevent && params.kind && !params.restplayers) {
      const events = await Event.find({
        date: params.dateevent,
        kind: params.kind,
      });
      return events;
    } else if (params.restplayers && params.kind && !params.dateevent) {
      const events = await Event.find({
        kind: params.kind,
        rest_players: { $gt: Number(params.restplayers) - 1 },
      });
      return events;
    } else if (params.kind && !params.dateevent && !params.restplayers) {
      const events = await Event.find({
        kind: params.kind,
      });
      return events;
    }
  }

  async getThree() {
    const events = await Event.find();
    return events;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('You do not show id');
    }

    const uniqueEvent = await Event.findById(id);
    return uniqueEvent;
  }

  async update(id, event) {
    if (!id) {
      throw new Error('You do not select event');
    }
    const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });
    return updatedEvent;
  }

  async delete(id) {
    if (!id) {
      throw new Error('You do not insert id');
    }
    const event = await Event.findByIdAndDelete(id);
    return event;
  }
  async checkExisting(event) {
    const checkEvent = await Event.find({
      date: `${event.date}`,
      time_start: `${event.time_start}`,
      time_end: `${event.time_end}`,
    });
    return checkEvent;
  }
}

export default new EventService();

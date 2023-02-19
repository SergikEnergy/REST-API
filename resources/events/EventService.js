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
    if (params.date && params.restPlayers) {
      const events = await Event.find({
        date: `${params.date}`,
        kind: `${params.kind}`,
        rest_players: { $gt: params.restPlayers },
      });
      return events;
    }
    if (params.date) {
      const events = await Event.find({
        date: `${params.date}`,
        kind: `${params.kind}`,
      });
      return events;
    }
    if (params.restPlayers) {
      const events = await Event.find({
        kind: `${params.kind}`,
        rest_players: { $gt: params.restPlayers },
      });
      return events;
    } else {
      const events = await Event.find({
        kind: `${params.kind}`,
      });
      return events;
    }
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

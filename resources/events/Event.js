import mongoose from 'mongoose';

const Event = new mongoose.Schema({
  kind: { type: String, required: true },
  date: { type: String, required: true },
  id_place: { type: String, required: true },
  time_start: { type: String, required: true },
  time_end: { type: String, required: true },
  place_name: { type: String, required: true },
  rest_players: { type: Number, required: true },
  players: { type: [String], required: false, default: [] },
});

export default mongoose.model('Event', Event);

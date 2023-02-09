import mongoose from 'mongoose';

const Place = new mongoose.Schema({
  address: { type: String, require: false },
  date: { type: String, require: true },
  coordinates: {
    latitude: { type: String, require: true },
    longitude: { type: String, require: true },
  },
  kinds: { type: [String], required: true },
  reserved: {
    type: [
      {
        time_start: { type: String, require: true },
        time_end: { type: String, require: true },
        players: { type: [String], required: false },
        selected_sport: { type: String, required: true },
        coach_id: { type: String, required: false },
      },
    ],
  },
});

export default mongoose.model('Place', Place);

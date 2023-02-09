import mongoose from 'mongoose';

const Place = new mongoose.Schema({
  address: { type: String, require: false, default: '' },
  name: { type: String, require: true, unique: true },
  events: { type: [String], require: false, default: [] },
  coordinates: {
    latitude: { type: String, require: true, unique: true },
    longitude: { type: String, require: true, unique: true },
  },
  kinds: { type: [String], required: true },
});

export default mongoose.model('Place', Place);

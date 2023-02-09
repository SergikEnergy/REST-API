import mongoose from 'mongoose';

const City = new mongoose.Schema({
  kind_sport: {
    basketball: { type: [String], required: false, default: [] },
    football: { type: [String], required: false, default: [] },
    volley: { type: [String], required: false, default: [] },
    tennis: { type: [String], required: false, default: [] },
  },
  coordinates: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
  },
  name: { type: String, required: true, unique: true },
});

export default mongoose.model('City', City);

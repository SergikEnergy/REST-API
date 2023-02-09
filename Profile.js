import mongoose from 'mongoose';

const Profile = new mongoose.Schema({
  coach: { type: Boolean, required: true },
  player: { type: Boolean, required: true },
  events: { type: [String], required: true, default: [] },
  personal_data: {
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    nick_name: { type: String, required: true },
    games: { type: [String], required: true },
  },
  urlsToImg: {
    avatar: { type: String },
    background: { type: String },
  },
});

export default mongoose.model('Profile', Profile);

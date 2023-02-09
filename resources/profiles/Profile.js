import mongoose from 'mongoose';

const Profile = new mongoose.Schema({
  coach: { type: Boolean, required: true, default: false },
  player: { type: Boolean, required: true, default: true },
  events: { type: [String], required: true, default: [] },
  nickName: { type: String, required: true, unique: true },
  personalData: {
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    first_name: { type: String, required: false, default: '' },
    last_name: { type: String, required: false, default: '' },

    games: { type: [String], required: true },
  },
  urlsToImg: {
    avatar: { type: String, required: false },
    background: { type: String, required: false },
  },
});

export default mongoose.model('Profile', Profile);

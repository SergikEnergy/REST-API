import mongoose from 'mongoose';

const Profile = new mongoose.Schema({
  coach: { type: Boolean, required: true, default: false },
  player: { type: Boolean, required: true, default: true },
  events: { type: [String], required: true, default: [] },
  nickName: { type: String, required: true, unique: true },
  personalData: {
    weight: { type: Number, required: false, default: 0 },
    height: { type: Number, required: false, default: 0 },
    first_name: { type: String, required: false, default: '' },
    last_name: { type: String, required: false, default: '' },

    games: { type: [String], required: true, default: [] },
  },
  avatar: { type: String, required: true, default: '' },
  password: { type: String, required: true },
});

export default mongoose.model('Profile', Profile);

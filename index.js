import express from 'express';
import mongoose from 'mongoose';
// import Event from './Event.js';
// import City from './City.js';
// import Place from './Place.js';
// import Profile from './Profile.js';
import router from './Router.js';
import userRouter from './userRouter.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://testtesttest:Test1234Test@clusterfirst.l8amfjw.mongodb.net/GoSportBase';

const app = express();

app.use(express.json());
app.use('/api', router);
app.use('/api', userRouter); // for users routing

// app.get('/', (req, res) => {
//   console.log(req.query.test);
//   res.status(200).json('server running');
// });

/*app.post('/', async (req, res) => {
  try {
    const { kind, date, id_place, time_start, time_end, place_name, rest_players, players } = req.body;
    const event = await Event.create({ kind, date, id_place, time_start, time_end, place_name, rest_players, players });
    const { address, date, coordinates, kinds, reserved } = req.body;
    const place = await Place.create({ address, date, coordinates, kinds, reserved });
    const { coach, player, personal_data, urlsToImg } = req.body;
    const profile = await Profile.create({ coach, player, personal_data, urlsToImg });
    console.log(req.body);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
});*/

async function startApp() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('conected to mongoose');
    app.listen(PORT, () => {
      console.log('server is running...');
    });
  } catch (error) {
    console.log(error);
    console.log('something wrong by writing MongoDB and start server');
  }
}
startApp();

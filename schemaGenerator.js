import mongoose from 'mongoose';
import generateSchema from 'generate-schema';

let MongooseSchema = generateSchema.mongoose({
  coach: true,
  player: false,
  events: ['eventID1', 'eventID2'],
  nick_name: 'IvanIvan',
  personal_data: {
    weight: 90,
    height: 185,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    games: ['basketball', 'volleyball'],
  },
  urlsToImg: {
    avatar: '../../urlToAvatar',
    background: '../urlToBG',
  },
});
console.log(MongooseSchema);

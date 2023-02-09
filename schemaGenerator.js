import mongoose from 'mongoose';
import generateSchema from 'generate-schema';

let MongooseSchema = generateSchema.mongoose({
  coach: true,
  player: false,
  personal_data: {
    weight: 90,
    height: 185,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    nick_name: 'IvanIvan',
    games: ['basketball', 'volleyball'],
  },
  urlsToImg: {
    avatar: '../../urlToAvatar',
    background: '../urlToBG',
  },
});
console.log(MongooseSchema);

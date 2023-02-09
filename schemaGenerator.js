import mongoose from 'mongoose';
import generateSchema from 'generate-schema';

let MongooseSchema = generateSchema.mongoose({
  name: 'Ground1',
  address: 'adress1',
  events: ['eventID1', 'eventID2'],
  coordinates: {
    latitude: '11.11',
    longitude: '22.22',
  },
  kinds: ['basketball', 'football', 'volleyball'],
});
console.log(MongooseSchema);

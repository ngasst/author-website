import { Schema, Types } from 'mongoose';
import { ObjectID } from 'bson';

export default new Schema({
  labels: {
    english: {
      type: String,
      required: true,
    },
    french: {
      type: String,
      required: true,
    },
  },
  color: {
    type: String,
    required: true,
  },
});

import { Schema, Types } from 'mongoose';
import { ObjectId } from 'bson';

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
  parent: {
    type: ObjectId,
    required: true,
  },
});

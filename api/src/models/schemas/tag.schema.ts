import { Schema, Types } from 'mongoose';
import { ObjectId } from 'bson';

export default new Schema({
  label: {
    type: String,
    required: true,
  },
  usage: {
    type: Number,
    required: false,
  },
});

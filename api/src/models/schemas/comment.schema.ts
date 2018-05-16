import { Schema, Types } from 'mongoose';
import { ObjectID, ObjectId } from 'bson';

export default new Schema({
  author: {
    type: String,
    required: true,
    index: true,
  },
  origin: {
    type: String,
    required: false,
    default: 'website',
    lowercase: true,
  },
  email: {
    type: String,
    required: false,
    lowercase: true,
  },
  body: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50000,
  },
  replies: {
    type: [ObjectId],
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  moderated: {
    type: Boolean,
    required: true,
    default: false,
  },
});

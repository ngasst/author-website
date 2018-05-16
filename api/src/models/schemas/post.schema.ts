import { Schema, Types } from 'mongoose';
import { ObjectId } from 'bson';

export default new Schema({
  title: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  author: {
    type: ObjectId,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    thumb: {
      type: String,
      required: true,
    },
    large: {
      type: String,
      required: true,
    },
  },
  summary: {
    type: String,
    required: true,
    minlength: 100,
    maxlength: 5000,
  },
  views: {
    type: Number,
    required: false,
  },
  shares: {
    facebook: {
      type: Number,
      required: false,
      default: 0,
    },
    twitter: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  slug: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  category: {
    type: ObjectId,
    required: true,
  },
  subCategories: {
    type: [ObjectId],
    required: true,
  },
  comments: {
    type: [ObjectId],
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

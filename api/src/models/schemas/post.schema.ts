import { Schema, SchemaTypes } from 'mongoose';

export default new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    author: {
      type: SchemaTypes.ObjectId,
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
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'Category',
    },
    subCategories: [
      {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'SubCategory',
      },
    ],
    comments: [
      {
        type: SchemaTypes.ObjectId,
        required: false,
        ref: 'Comment',
      },
    ],
    tags: [
      {
        type: SchemaTypes.ObjectId,
        required: false,
        ref: 'Tag',
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
  }
);

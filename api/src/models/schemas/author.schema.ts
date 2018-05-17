import { Schema } from 'mongoose';

export default new Schema(
  {
    name: {
      last: {
        type: String,
        required: true,
      },
      first: {
        type: String,
        required: true,
      },
      display: {
        type: String,
        required: true,
      },
    },
    social: {
      twitter: {
        type: String,
        required: false,
      },
      facebook: {
        type: String,
        required: false,
      },
      website: {
        type: String,
        required: false,
      },
    },
    photos: {
      thumb: {
        type: String,
        required: true,
      },
      large: {
        type: String,
        required: true,
      },
      credit: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
  }
);

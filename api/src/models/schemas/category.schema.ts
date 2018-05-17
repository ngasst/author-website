import { Schema } from 'mongoose';

export default new Schema(
  {
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
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
  }
);

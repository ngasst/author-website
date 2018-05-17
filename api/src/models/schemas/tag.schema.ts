import { Schema, Types } from 'mongoose';

export default new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    usage: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
  }
);

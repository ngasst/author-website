import { Schema, SchemaTypes } from 'mongoose';

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
    parent: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'Category',
    },
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
  }
);

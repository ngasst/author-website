import { Schema, SchemaTypes } from 'mongoose';
import { CommentOrigin } from '../interfaces';

export default new Schema(
  {
    author: {
      type: String,
      required: true,
      index: true,
    },
    origin: {
      type: String,
      required: false,
      default: CommentOrigin.WEBSITE,
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
    replies: [
      {
        type: SchemaTypes.ObjectId,
        required: false,
        ref: 'Comment',
      },
    ],
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
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
  }
);

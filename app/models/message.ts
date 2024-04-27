'use server';

import mongoose from 'mongoose';

export interface Message extends mongoose.Document {
  name: string;
  email: string;
  message: string;
  replied: boolean;
  createdAt: Date;
}

const messageSchema = new mongoose.Schema<Message>({
  _id: String,

  name: {
    type: String,
    required: true,
    min: 2,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    min: 10,
  },
  replied: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

delete mongoose.models['Message'];
export default mongoose.model<Message>('Message', messageSchema);

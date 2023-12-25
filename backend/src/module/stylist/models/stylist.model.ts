import mongoose, { Schema, Types } from 'mongoose';

const stylistSchema = new Schema({
  shopId: {
    type: Types.ObjectId,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  serviceTypes: {
    type: [{
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    }],
  },

  description: {
    type: String,
  },
});

export default mongoose.model('stylists', stylistSchema);
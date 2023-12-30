import mongoose, { Schema, Types } from 'mongoose';
import ShopInterface from "../../shop/interfaces/shop.interface";

interface StylistDocument extends Document, ShopInterface {}

const stylistSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  });

export default mongoose.model<StylistDocument>('stylists', stylistSchema);
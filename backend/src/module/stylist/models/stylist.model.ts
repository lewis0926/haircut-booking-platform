import mongoose, { Schema, Types } from 'mongoose';
import ShopInterface from "../../shop/interfaces/shop.interface";
import { ServiceType } from "../enum/service-type.enum";

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
          enum: Object.values(ServiceType),
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
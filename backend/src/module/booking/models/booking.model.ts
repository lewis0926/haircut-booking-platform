import mongoose, { Schema, Types } from 'mongoose';
import ShopInterface from "../interfaces/booking.interface";
import { ServiceType } from "../../stylist/enum/service-type.enum";

interface BookingDocument extends Document, ShopInterface {}

const BooingSchema = new Schema(
  {
    customerId: {
      type: Types.ObjectId,
      required: true
    },

    stylistId: {
      type: Types.ObjectId,
      required: true
    },

    startAt: {
      type: Date,
      required: true
    },

    endAt: {
      type: Date,
      required: true
    },

    serviceType: {
      type: String,
      enum: Object.values(ServiceType),
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    isCancelled: {
      type: Boolean,
      default: false
    },
  },
  {
      timestamps: true,
  });

export default mongoose.model<BookingDocument>('bookings', BooingSchema);
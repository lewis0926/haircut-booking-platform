import mongoose, { Schema } from 'mongoose';

const customerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
    }
  },
  {
    timestamps: true,
  });

export default mongoose.model("customers", customerSchema);
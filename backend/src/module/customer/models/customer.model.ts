import mongoose, { Schema, Types } from 'mongoose';

const customerSchema = new Schema({
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
});

export default mongoose.model("customers", customerSchema);
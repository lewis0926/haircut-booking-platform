import { Types } from "mongoose";

interface Review {
  id?: Types.ObjectId;
  customerId: Types.ObjectId;
  stylistId: Types.ObjectId;
  serviceType: string;
  comment: string;
  rating: Number;
}

export default Review;

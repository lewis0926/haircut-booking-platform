import { Types } from "mongoose";
import { ServiceType } from "../../stylist/enum/service-type.enum";

interface Booking  {
  _id?: Types.ObjectId;
  customerId: Types.ObjectId;
  stylistId: Types.ObjectId;
  startAt: Date;
  endAt: Date;
  serviceType: ServiceType;
  price: number;
  isCancelled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default Booking;

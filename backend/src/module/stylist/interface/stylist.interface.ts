import { Types } from 'mongoose';

interface StylistServiceType {
  name: string;
  price: number;
}

interface Stylist {
  _id?: Types.ObjectId;
  shopId: Types.ObjectId;
  firstName: string;
  lastName: string;
  serviceTypes: StylistServiceType[];
  description?: string;
}

export default Stylist;
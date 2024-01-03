import logger from "../../../logger";
import Booking from "../interfaces/booking.interface";
import { NotFoundError, UnauthorizedError } from "../../../middleware/custom-errors";
import { Types } from "mongoose";
import BookingModel from "../models/booking.model";
import CustomerService from "../../customer/services/customer.service";
import StylistService from "../../stylist/service/stylist.service";

class BookingService {
  private readonly bookingModel;
  private readonly customerService;
  private readonly stylistService;

  constructor(
    customerService: CustomerService,
    stylistService: StylistService,
  ) {
    this.bookingModel = BookingModel;
    this.customerService = customerService;
    this.stylistService = stylistService;
  }

  public getBookingsByCustomer = async (customerId: string): Promise<Booking[]> => {
    logger.info(`Getting bookings by customer with id: ${customerId}`);
    return await this.bookingModel.find({
      customerId: new Types.ObjectId(customerId)
    });
  }

  public getBookingsByStylist = async (stylistId: string): Promise<Booking[]> => {
    logger.info(`Getting bookings by stylist with id: ${stylistId}`);
    return await this.bookingModel.find({
      stylistId: new Types.ObjectId(stylistId)
    });
  }

  public createBooking = async (body: any) => {
    logger.info(`Adding new booking: ${JSON.stringify(body)}`);

    if (!(await this.customerService.getCustomer(body.customerId))) {
      throw new NotFoundError(`Customer not found with id: ${body.customerId}`);
    }
    if (!(await this.stylistService.getStylistById(body.stylistId))) {
      throw new NotFoundError(`Stylist not found with id: ${body.stylistId}`);
    }

    const newBooking = new this.bookingModel(body);
    await newBooking.save();

    return newBooking;
}

  public cancelBooking = async (bookingId: string, customerId?: string, stylistId?: string) => {
    const booking = await this.bookingModel.findById(bookingId);

    if (!booking) {
      throw new NotFoundError(`Booking not found with id: ${bookingId}`);
    }
    if (customerId && booking.customerId.toString() !== customerId) {
      throw new UnauthorizedError("You are not authorized to cancel this booking");
    }
    if (stylistId && booking.stylistId.toString() !== stylistId) {
      throw new UnauthorizedError("You are not authorized to cancel this booking");
    }

    logger.info(`Cancelling booking with id: ${bookingId}`);

    await this.bookingModel.updateOne(
      { _id: new Types.ObjectId(bookingId) },
      { $set: { isCancelled: true } }
    )

    return await this.bookingModel.findById(bookingId);
  }

  public updateBooking = async (bookingId: string, body: any, customerId?: string, stylistId?: string) => {
    const booking = await this.bookingModel.findById(bookingId);

    if (!booking) {
      throw new NotFoundError(`Booking not found with id: ${bookingId}`);
    }
    if (customerId && booking.customerId.toString() !== customerId) {
      throw new UnauthorizedError("You are not authorized to update this booking");
    }
    if (stylistId && booking.stylistId.toString() !== stylistId) {
      throw new UnauthorizedError("You are not authorized to update this booking");
    }

    if (body.customerId && !(await this.customerService.getCustomer(body.customerId))) {
      throw new NotFoundError(`Customer in body not found with id: ${body.customerId}`);
    }
    if (body.stylistId && !(await this.stylistService.getStylistById(body.stylistId))) {
      throw new NotFoundError(`Stylist in body not found with id: ${body.stylistId}`);
    }

    logger.info(`Updating booking with id: ${bookingId}`);

    await this.bookingModel.updateOne(
      { _id: new Types.ObjectId(bookingId) },
      { $set: body }
    );

    return await this.bookingModel.findById(bookingId);
  }
}

export default BookingService;
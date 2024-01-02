import { NextFunction, Request, Response } from 'express';
import BookingService from "../service/booking.service";

class BookingController {
  private readonly bookingService;

  constructor(bookingService: BookingService) {
    this.bookingService = bookingService;
  }

  public getBookingsByCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookings = await this.bookingService.getBookingsByCustomer(req?.params?.id);
      res.status(200).send(bookings);
    } catch (err) {
      next(err);
    }
  }

  public getBookingsByStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookings = await this.bookingService.getBookingsByStylist(req?.params?.id);
      res.status(200).send(bookings);
    } catch (err) {
      next(err);
    }
  }

  public createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const booking = await this.bookingService.createBooking(req.body);
      res.status(201).send(booking);
    } catch (err) {
      next(err);
    }
  }

  public cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const booking = await this.bookingService.cancelBooking(req?.params?.id);
      res.status(200).send(booking);
    } catch (err) {
      next(err);
    }
  }

  public updateBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const booking = await this.bookingService.updateBooking(req?.params?.id, req.body);
      res.status(200).send(booking);
    } catch (err) {
      next(err);
    }
  }
}

export default BookingController;
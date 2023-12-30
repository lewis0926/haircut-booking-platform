import { NextFunction, Request, Response } from 'express';
import StylistModel from "../models/stylist.model";
import logger from "../../../logger";
import { Types } from "mongoose";
import { NotFoundError } from "../../../middleware/custom-errors";

class StylistController {
  private readonly stylistModel;

  constructor() {
    this.stylistModel = StylistModel;
  }

  public getAllStylists = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info("Getting all stylists");

      const stylists = await this.stylistModel.find({});
      logger.info(`Stylists: ${JSON.stringify(stylists)}`);

      res.send(stylists);
    } catch (err) {
      next(err);
    }
  }

  public createStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(`Adding new stylist: ${JSON.stringify(req.body)}`);

      const newStylist = new this.stylistModel(req.body);
      await newStylist.save();

      res.send(newStylist);
    } catch (err) {
      next(err);
    }
  }

  public deleteStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stylistId = req?.params?.id;
      if (!stylistId) {
        throw new NotFoundError(`Stylist not found with id: ${stylistId}`);
      }

      logger.info(`Deleting stylist with id: ${stylistId}`);
      await this.stylistModel.findByIdAndDelete(stylistId);

      res.send("Deleted successfully");
    } catch (err) {
      next(err);
    }
  }

  public updateStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stylistId = req?.params?.id;
      if (!stylistId) {
        throw new NotFoundError(`Stylist not found with id: ${stylistId}`);
      }

      logger.info(`Updating task with id: ${req?.params?.id}`);

      const updatedStylist = req.body;

      await this.stylistModel.updateOne(
        { _id: new Types.ObjectId(stylistId) },
        { $set: updatedStylist }
      );

      logger.info(`Updated task: ${JSON.stringify(updatedStylist)}`);
      res.send(updatedStylist);
    } catch (err) {
      next(err);
    }
  }
}

export default StylistController;
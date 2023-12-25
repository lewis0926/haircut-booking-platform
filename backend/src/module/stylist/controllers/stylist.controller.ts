import { Request, Response } from 'express';
import StylistModel from "../models/stylist.model";
import logger from "../../../logger";
import { Types } from "mongoose";
import { InternalServerException } from "../../../error-handler";

class StylistController {
  private readonly stylistModel;

  constructor() {
    this.stylistModel = StylistModel;
  }

  public getAllStylists = async (req: Request, res: Response) => {
    try {
      logger.info("Getting all stylists");

      const stylists = await this.stylistModel.find({});
      logger.info(`Stylists: ${JSON.stringify(stylists)}`);

      res.send(stylists);
    } catch (err) {
      InternalServerException(`Error in getting stylists: ${err}`, res);
    }
  }

  public createStylist = async (req: Request, res: Response) => {
    try {
      logger.info(`Adding new stylist: ${JSON.stringify(req.body)}`);

      const newStylist = new this.stylistModel(req.body);
      await newStylist.save();

      res.send(newStylist);
    } catch (err) {
      InternalServerException(`Error in adding new stylist: ${err}`, res);
    }
  }

  public deleteStylist = async (req: Request, res: Response) => {
    try {
      const stylistId = req?.params?.id;
      if (!stylistId) {
        throw new Error(`Valid stylist id is not provided: ${stylistId}`);
      }

      logger.info(`Deleting stylist with id: ${stylistId}`);
      await this.stylistModel.findByIdAndDelete(stylistId);

      res.send("Deleted successfully");
    } catch (err) {
      InternalServerException(`Error in deleting stylist: ${err}`, res);
    }
  }

  public updateStylist = async (req: Request, res: Response) => {
    try {
      const stylistId = req?.params?.id;
      if (!stylistId) {
        throw new Error(`Valid stylist id is not provided: ${stylistId}`);
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
      InternalServerException(`Error in updating stylist: ${err}`, res);
    }
  }
}

export default StylistController;


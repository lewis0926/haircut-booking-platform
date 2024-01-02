import logger from "../../../logger";
import { NotFoundError } from "../../../middleware/custom-errors";
import { Types } from "mongoose";
import StylistModel from "../models/stylist.model";
import Stylist from "../interface/stylist.interface";
import ShopService from "../../shop/service/shop.service";

class StylistService {
  private readonly stylistModel;
  private readonly shopService;

  constructor(
    shopService: ShopService
  ) {
    this.stylistModel = StylistModel;
    this.shopService = shopService;
  }

  public getAllStylists = async (): Promise<Stylist[]> => {
    logger.info("Getting all stylists");
    return await this.stylistModel.find({});
  }

  public getStylistById = async (stylistId: string): Promise<Stylist | null> => {
    logger.info(`Getting stylist with id: ${stylistId}`);
    return await this.stylistModel.findById(stylistId);
  }

  public createStylist = async (body: any) => {
    logger.info(`Adding new stylist: ${JSON.stringify(body)}`);

    const shop = await this.shopService.getShopById(body.shopId);
    if (!shop) {
      throw new NotFoundError(`Shop not found with id: ${body.shopId}`);
    }

    const newStylist = new this.stylistModel(body);
    await newStylist.save();

    return newStylist;
  }

  public deleteStylist = async (stylistId: string) => {
    if (!stylistId) {
      throw new NotFoundError(`Stylist not found with id: ${stylistId}`);
    }

    logger.info(`Deleting stylist with id: ${stylistId}`);
    await this.stylistModel.findByIdAndDelete(stylistId);

    return;
  }

  public updateStylist = async (stylistId: string, body: any) => {
    if (!stylistId) {
      throw new NotFoundError(`Stylist not found with id: ${stylistId}`);
    }

    const shop = await this.shopService.getShopById(body.shopId);
    if (!shop) {
      throw new NotFoundError(`Shop not found with id: ${body.shopId}`);
    }

    logger.info(`Updating stylist with id: ${stylistId}`);

    await this.stylistModel.updateOne(
      { _id: new Types.ObjectId(stylistId) },
      { $set: body }
    );

    return await this.stylistModel.findById(stylistId);
  }
}

export default StylistService;
import { NextFunction, Request, Response } from 'express';
import StylistService from "../service/stylist.service";

class StylistController {
  private readonly stylistService;

  constructor(stylistService: StylistService) {
    this.stylistService = stylistService;
  }

  public getAllStylists = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stylists = await this.stylistService.getAllStylists();
      res.send(stylists);
    } catch (err) {
      next(err);
    }
  }

  public createStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newStylist = await this.stylistService.createStylist(req.body);
      res.send(newStylist);
    } catch (err) {
      next(err);
    }
  }

  public deleteStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.stylistService.deleteStylist(req?.params?.id);
      res.send("Deleted successfully");
    } catch (err) {
      next(err);
    }
  }

  public updateStylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedShop = await this.stylistService.updateStylist(req?.params?.id, req.body);
      res.send(updatedShop);
    } catch (err) {
      next(err);
    }
  }
}

export default StylistController;
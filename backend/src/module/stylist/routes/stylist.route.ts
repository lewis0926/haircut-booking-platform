import express from 'express';
import StylistController from "../controllers/stylist.controller";

const initializeStylistRouter = (): express.Router => {
  const stylistRouter = express.Router();

  const stylistController = new StylistController();

  stylistRouter.get('/', stylistController.getAllStylists);
  stylistRouter.post('/', stylistController.createStylist);
  stylistRouter.delete('/:id', stylistController.deleteStylist);
  stylistRouter.put('/:id', stylistController.updateStylist);
  return stylistRouter;
}

export default initializeStylistRouter;

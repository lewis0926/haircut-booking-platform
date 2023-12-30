import express from 'express';
import StylistController from "../controllers/stylist.controller";

const initializeStylistRouter = (stylistController: StylistController): express.Router => {
  const stylistRouter = express.Router();

  stylistRouter.get('/', stylistController.getAllStylists);
  stylistRouter.post('/', stylistController.createStylist);
  stylistRouter.delete('/:id', stylistController.deleteStylist);
  stylistRouter.put('/:id', stylistController.updateStylist);
  return stylistRouter;
}

export default initializeStylistRouter;

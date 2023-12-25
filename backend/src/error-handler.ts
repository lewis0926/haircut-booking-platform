import logger from "./logger";
import { Response } from "express";

const InternalServerException = (message: string, res: Response) => {
  const errorMessage = message || "Internal Server Exception";
  logger.error(errorMessage);
  res.status(500).send(errorMessage);
}

export { InternalServerException }
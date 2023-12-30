import { auth } from "../config/firebase.config";
import { Request, Response, NextFunction } from 'express';
import { AuthenticationError } from "./custom-errors";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Verifying token");
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodeValue = await auth.verifyIdToken(token);
      if (decodeValue) {
        if (decodeValue.uid !== req.params.id) {
          throw new AuthenticationError('Invalid Token.');
        }
        return next();
      }
    } catch (err) {
      next(err);
    }
  } else {
    throw new AuthenticationError('No Token was found.');
  }
};
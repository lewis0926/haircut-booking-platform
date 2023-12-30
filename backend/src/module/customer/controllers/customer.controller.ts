import { NextFunction, Request, Response } from 'express';
import CustomerModel from "../models/customer.model";
import logger from "../../../logger";
import { Types } from "mongoose";
import { NotFoundError } from "../../../middleware/custom-errors";
import { ObjectId } from 'mongodb';
import {auth} from "../../../config/firebase.config";

class CustomerController {
  private readonly customerModel;

  constructor() {
    this.customerModel = CustomerModel;
  }

  public getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId = req?.params?.id;
      if (!customerId) {
        throw new NotFoundError(`Customer not found with id: ${customerId}`);
      }

      logger.info(`Getting a customer`);
  
      const customer = await this.customerModel.findById(customerId);
      logger.info(`Customer: ${JSON.stringify(customer)}`);

      res.status(200).send(customer);
    } catch (err) {
      next(err);
    }
  }

  public getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(`Getting all customers`);
  
      const customers = await this.customerModel.find({});
      logger.info(`Customers: ${JSON.stringify(customers)}`);

      res.status(200).send(customers);
    } catch (err) {
      next(err);
    }
  }

  public createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(`Adding new customer: ${JSON.stringify(req.body)}`);
 
      const newCustomer = new this.customerModel(req.body);
      await newCustomer.save();

      res.send(newCustomer);
    } catch (err) {
      next(err);
    }
  }

  public updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId = req?.params?.id;
      if (!customerId) {
        throw new NotFoundError(`Customer not found with id: ${customerId}`);
      }

      logger.info(`Updating customer with id: ${customerId}`);

      const updatedCustomer = req.body;

      await this.customerModel.updateOne(
        {_id: new Types.ObjectId(customerId)}, 
        { $set: updatedCustomer}
      );

      logger.info(`Updated customer: ${JSON.stringify(updatedCustomer)}`);
      res.send(updatedCustomer);
    } catch (err) {
      next(err);
    }
  }

  public deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId = req.params.id;
      if (!customerId) {
        throw new NotFoundError(`Customer not found with id: ${customerId}`);
      }

      logger.info(`Updating customer with id: ${customerId}`);
      await this.customerModel.deleteOne({ _id: new Types.ObjectId(customerId) });

      res.send("Deleted successfully");
    } catch (err) {
      next(err);
    }
  }

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Customer signing up")
    const objectId = new ObjectId().toHexString();
    await auth.createUser({
      uid: objectId,
      email: req.body.email,
      password: req.body.password,
    }).then(() => {
      logger.info("Signed up successfully")
      const updatedBody = {...req.body, _id: objectId};
      const updatedReq = req;
      updatedReq.body = updatedBody;
      this.createCustomer(updatedReq, res, next);
    }).catch((err) => next(err));
    
  };
}

export default CustomerController;
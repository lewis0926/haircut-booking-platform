import logger from "../../../logger";
import { NotFoundError } from "../../../middleware/custom-errors";
import { Types } from "mongoose";
import CustomerModel from "../models/customer.model";
import Customer from "../interfaces/customer.interface";
import { ObjectId } from "mongodb";
import { auth } from "../../../config/firebase.config";

class CustomerService {
  private readonly customerModel;

  constructor() {
    this.customerModel = CustomerModel;
  }

  public getCustomer = async (customerId: string): Promise<Customer | null> => {
    if (!customerId) {
      throw new NotFoundError(`Customer not found with id: ${customerId}`);
    }

    logger.info(`Getting a customer with id: ${customerId}`);
    return await this.customerModel.findById(customerId);
  }

  public getAllCustomers = async (): Promise<Customer[]> => {
    logger.info(`Getting all customers`);
    return await this.customerModel.find({});
  }

  public createCustomer = async (body: any) => {
    logger.info(`Adding new customer: ${JSON.stringify(body)}`);

    const newCustomer = new this.customerModel(body);
    await newCustomer.save();

    return newCustomer;
  }

  public updateCustomer = async (customerId: string, body: any): Promise<Customer | null> => {
    if (!customerId) {
      throw new NotFoundError(`Customer not found with id: ${customerId}`);
    }

    logger.info(`Updating customer with id: ${customerId}`);

    await this.customerModel.updateOne(
      {_id: new Types.ObjectId(customerId)},
      { $set: body}
    );

    return await this.customerModel.findById(customerId);
  }

  public deleteCustomer = async (customerId: string) => {
    if (!customerId) {
      throw new NotFoundError(`Customer not found with id: ${customerId}`);
    }

    logger.info(`Updating customer with id: ${customerId}`);
    await this.customerModel.deleteOne({ _id: new Types.ObjectId(customerId) });

    return;
  }

  public signUp = async (body: any): Promise<Customer | null> => {
    logger.info("Customer signing up")
    const objectId = new ObjectId().toHexString();

    await auth.createUser({
      uid: objectId,
      email: body.email,
      password: body.password,
    })

    logger.info("Signed up successfully")
    const updatedBody = {...body, _id: objectId};
    return await this.createCustomer(updatedBody);
  }
}

export default CustomerService;
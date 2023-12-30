import express from "express";
import CustomerController from "../controllers/customer.controller";

const initalizeCustomerRouter = (): express.Router => {
  const customerRouter = express.Router();

  const customerController = new CustomerController();

  customerRouter.post("/", customerController.createCustomer);
  customerRouter.get("/", customerController.getAllCustomers);
  customerRouter.get("/:id", customerController.getCustomer);
  customerRouter.put("/:id", customerController.updateCustomer);
  customerRouter.delete("/:id", customerController.deleteCustomer);
  return customerRouter;
}

export default initalizeCustomerRouter;
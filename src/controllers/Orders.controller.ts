import { Request, Response } from 'express';
import OrderServices from '../services/Orders.service';

class OrderController {
  constructor(private orderService = new OrderServices()) {}

  public getAllOrdersData = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    res.status(200).json(orders);
  };
}

export default OrderController;
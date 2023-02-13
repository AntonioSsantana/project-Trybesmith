import connection from '../models/connection';
import OrderModel from '../models/Order.model';
import IOrder from '../interfaces/Order';

class OrderServices {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }
}

export default OrderServices;
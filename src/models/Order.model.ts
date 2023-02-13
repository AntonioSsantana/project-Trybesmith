import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/Order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const getOrders = await this.connection.execute(
      `SELECT orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders 
      INNER JOIN Trybesmith.products ON orders.id = products.order_id
      GROUP BY orders.id`,
    );

    const [rows] = getOrders;
    return rows as IOrder[];
  }
}
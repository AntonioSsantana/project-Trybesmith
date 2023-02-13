import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/Products';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProductData(product: IProduct) {
    const { name, amount } = product;
    const QUERY = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(QUERY, [name, amount]);

    const insert = { id: insertId, ...product };
    return insert;
  }
}
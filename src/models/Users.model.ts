import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/User';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createNewUser(user: IUser) {
    const { username, vocation, level, password } = user;
    const QUERY = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) VALUES (?, ?, ? ,?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(QUERY, [username, vocation, level, password]);

    const insert = { id: insertId, ...user };
    return insert;
  }
}
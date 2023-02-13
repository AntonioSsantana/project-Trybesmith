import connection from '../models/connection';
import UserModel from '../models/Users.model';
import IUser from '../interfaces/User';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public createNewUser(user: IUser): Promise<IUser> {
    return this.model.createNewUser(user);
  }
}

export default UserService;
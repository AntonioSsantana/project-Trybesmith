import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/Users.service';

const secret = 'senhaIncrivelmenteSecreta';

class UserController {
  constructor(private userService = new UserService()) {}

  public createUserData = async (req: Request, res: Response) => {
    const user = req.body;

    const token = jwt.sign({
      user,
    }, secret, {
      expiresIn: '48h',
      algorithm: 'HS256',
    });
    await this.userService.createNewUser(user);
    res.status(201).json({ token });
  };
}

export default UserController;
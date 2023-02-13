import { Router } from 'express';
import UserController from '../controllers/Users.controller';

const userController = new UserController();

const routers = Router();

routers.post('/', userController.createUserData);

export default routers;
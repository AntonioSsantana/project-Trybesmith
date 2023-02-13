import { Router } from 'express';
import OrderController from '../controllers/Orders.controller';

const orderController = new OrderController();

const routers = Router();

routers.get('/', orderController.getAllOrdersData);

export default routers;
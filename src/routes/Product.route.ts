import { Router } from 'express';
import ProductController from '../controllers/Products.controller';

const productController = new ProductController();

const routers = Router();

routers.post('/', productController.createProduct);

export default routers;
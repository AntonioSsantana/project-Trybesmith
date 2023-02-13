import { Request, Response } from 'express';
import ProdService from '../services/Products.service';

class ProductController {
  constructor(private prodService = new ProdService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await this.prodService.createProduct(product);
    return res.status(201).json(createdProduct);
  };
}

export default ProductController;
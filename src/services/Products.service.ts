import ProductModel from '../models/Products.model';
import connection from '../models/connection';
import { IProduct } from '../interfaces/Products';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createProduct(product: IProduct) {
    return this.model.createProductData(product);
  }

  public async getAllProducts() {
    const prods = await this.model.getAllProductsData();
    return prods;
  }
}

export default ProductService;
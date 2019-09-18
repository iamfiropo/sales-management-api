import ProductModel from '../models/product.model';
import Response from '../utils/helpers/response';
import { PRODUCTS } from '../utils/data/product';

class ProductController {

  static async create(req, res) {
    try {
      const product = req.body;
      product.product_id = PRODUCTS.length + 1;
      product.created_on = new Date();
      const newProduct = new ProductModel({ ...product });
      newProduct.create();
      return Response.handleSuccess(201, 'Successfully Created', newProduct.result, res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  static async findAll(req, res) {
    try {
      const listOfProducts = await ProductModel.findAll();
      const product = 
      listOfProducts 
        ? 
      Response.handleSuccess(200, 'Successfully found all products', listOfProducts, res)
        :
      Response.handleError(404, 'No product found', res);
      return product;
    } catch (error) {
      return Response.handleError(500, error.toString(), res)
    }
  }

  static async findOne(req, res) {
    try {
      const productId = parseInt(req.params.productId, 10);
      const product = new ProductModel(productId);
      if (await product.findOne()) return Response.handleSuccess(200, 'Successfully found a specific product', product.result, res);
      return Response.handleError(404, 'Product not found', res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }
  
}

export default ProductController;
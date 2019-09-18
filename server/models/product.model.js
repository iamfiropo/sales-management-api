import { PRODUCTS } from '../utils/data/product';
import Model from './model'; 
import Response from '../utils/helpers/response';

class ProductModel extends Model {

  async create() {
    try {
      const product = this.payload;
      await this.save(PRODUCTS, product);
    } catch(error) {
      return Response.handleError(500, error.toString());
    }
  }

  static async findAll() {
    try {
      const product = PRODUCTS.length ? this.result = PRODUCTS : false
      return product;
    } catch(error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  async findOne() {
    try {
      const productId = this.payload;
      const obj = PRODUCTS.find((product) => {
        if (product.product_id !== productId) {
          return false;
        }
        this.result = product;
        return true;
      });
      return obj;
    } catch (error) {
      return Response.handleError(500, error.toString());
    }
  }

  // static async findOne() {
  //   try {
  //     const productId = this.payload;
  //     console.log('********', this.payload)
  //     const obj = PRODUCTS.find((product) => {
  //       if (product.product_id !== productId) {
  //         return false;
  //       }
  //       this.result = product;
  //       return true;
  //     });
  //     return obj;
  //   } catch (error) {
  //     return Response.handleError(500, error.toString());
  //   }
  // }

  // async findOne() {
  //   try {
  //     const productId = this.payload;
  //     const obj = PRODUCTS.find(product => {
  //       if (product.id !== productId) {
  //         return false;
  //       }
  //       this.result = product;
  //       return true;
  //     });
  //     return obj;
  //   } catch(error) {
  //         return Response.handleError(500, error.message, res);
  //       }
  // }

  //     const productId = this.payload;
  //     const obj = DATA.find(data => data.id === productId) 
  //     console.log('*********', obj); 
  //     this.result = obj ? DATA.filter(data => data.id === productId) : false
  //     return true;

  //   } catch(error) {
  //     return Response.handleError(500, error.message, res);
  //   }
  // }
}

export default ProductModel;
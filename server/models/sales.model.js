import { SALES } from '../utils/data/sales';
import Model from './model'; 
import Response from '../utils/helpers/response';

class SalesModel extends Model {  
  
  async create() {
    try {
      const sales = this.payload;
      await this.save(SALES, sales);
    } catch(error) {
      return Response.handleError(500, error.toString());
    }
  }
  
  static async findAll() {
    try {
      const sales = SALES.length ? this.result = SALES : false
      return sales;
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  async findOne() {
    try {
      const saleId = this.payload;
      const obj = SALES.find((sales) => {
        if (sales.customer_id !== saleId) {
          return false;
        }
        this.result = sales;
        return true;
      });
      return obj;
    } catch (error) {
      return Response.handleError(500, error.toString());
    }
  }

}

export default SalesModel;
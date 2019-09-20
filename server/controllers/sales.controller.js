import SalesModel from '../models/sales.model';
import Response from '../utils/helpers/response';
import { SALES } from '../utils/data/sales';

class SalesController {
  
  static async create(req, res) {
    try {
      const sales = req.body;
      sales.customer_id = SALES.length + 1;
      sales.created_on = new Date();
      const newSales = new SalesModel({ ...sales });
      newSales.create();
      return Response.handleSuccess(201, 'Successfully Created', newSales.result, res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  static async findAll(req, res) {
    const is_admin = res.locals.user.is_admin;
    // console.log('**********', res.locals.user);
    try {
      if (!is_admin) return Response.handleError(403, 'You do not have access to this endpoint!!!', res);
      const listOfSales = await SalesModel.findAll();
      const sales = 
      listOfSales 
        ? 
      Response.handleSuccess(200, 'Successfully found all sales', listOfSales, res)
        :
      Response.handleError(404, 'No sales found', res);
      return product;
    } catch(error) {
      return Response.handleError(500, error.toString(), res)
    }
  }

  static async findOne(req, res) {
    try {
      const saleId = parseInt(req.params.saleId, 10);
      const sales = new SalesModel(saleId);
      if (await sales.findOne()) return Response.handleSuccess(200, 'Successfully found a specific sales', sales.result, res);
      return Response.handleError(404, 'sales not found', res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }
  
}

export default SalesController;
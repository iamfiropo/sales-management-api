import Model from './model';
import { USERS } from '../utils/data/user';
import Response from '../utils/helpers/response';
import Token from '../config/jwt';

class UserModel extends Model {
  async signUp() {
    try {
      const newUser = this.payload;
      const email = USERS.some(user => user.email === newUser.email);
      if (!email) {
        newUser.token = await Token.userToken({ ...newUser.id, ...newUser.email });
        await this.save(USERS, newUser);
        return true;
      }
      return false;
    } catch (error) {
      return Response.handleError(500, error.toString());
    }
  }

  async signIn() {
    const email = this.payload;
    const obj = USERS.find(user => user.email === email);
    if (!obj) {
      return false;
    }
    obj.token = await Token.userToken({ ...obj.id, ...obj.email });
    this.result = obj;
    return true;
  }
}

export default UserModel;

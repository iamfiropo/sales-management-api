class Check {
  static checkToken(req) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader === 'undefined' || bearerHeader === '') return false;
    const bearer = bearerHeader.split(' ')[1];
    return bearer;
  }
}

export default Check;

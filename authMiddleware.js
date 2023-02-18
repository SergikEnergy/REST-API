import jwt from 'jsonwebtoken';
import authParams from './authConfig.js';
const { secret, cookies_key } = authParams;

export function authMiddleware(req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    let authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json('Unauthorized - 1');
    }
    let token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json('Unauthorized - 2');
    }
    // let cookies = req.cookies;
    // if (!cookies) {
    //   return res.status(401).json('Unauthorized - 1');
    // }
    // let token = cookies[cookies_key];
    // if (!token) {
    //   return res.status(401).json('Unauthorized - 2');
    // }
    console.log('tokenFromCookies ', token);

    const decodedData = jwt.decode(token, secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log('Error', e);
    return res.status(401).json('Unauthorized - 3');
  }
}

const atob = require('atob');
const { getByEmail } = require('../models/UsersService');

const notAuthorized = 'not authorized';

const parseJWT = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (err) {
    return null;
  }
};

async function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return next({ status: 401, message: notAuthorized });
  const decode = parseJWT(token);
  if (!decode) return next({ status: 401, message: notAuthorized });
  const { id } = await getByEmail(decode.email);
  if (!id) return next({ status: 401, message: notAuthorized });
  res.locals.userId = id;
  return next();
}

module.exports = validateToken;

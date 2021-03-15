const jwt = require('jsonwebtoken');
const { createUser, findUser } = require('../models/Users');
const { secret } = require('../Auth/TokenValidation');

const STATUS_OK = 200;
const STATUS_UNAUTHORIZED = 401;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const RegisterService = async (req, res, _next) => {
  try {
    const { name, email, password, role } = req.body;
    await createUser(name, email, password, role);
    const user = await findUser(email);
    if (!user || password !== user.password) {
      return res.status(STATUS_UNAUTHORIZED).json({ message: 'Incorrect username or password' });
    }
    const jwtConfig = {
      expiresIn: '14d',
      algorithm: 'HS256',
    };
    const payload = { name: user.name, email: user.email, role: user.role };
    const token = jwt.sign({ data: payload }, secret, jwtConfig);
    const data = { ...payload, token };
    res.status(STATUS_OK).json(data);
  } catch (error) {
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  RegisterService,
};
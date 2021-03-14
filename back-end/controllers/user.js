const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = 'dara secret';

const verifyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await userService.findUserByEmail(email);
    if (user 
      && user.email === email) return res.status(409).json({ message: 'Email already registered' });

    const createUser = await userService.create(name, email, password, role);

    return res.status(201).json({ user: createUser });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  verifyLogin,
  verifyUser,
};

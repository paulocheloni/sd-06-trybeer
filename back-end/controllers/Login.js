const jwt = require('jsonwebtoken');
const serviceLogin = require('../services/serviceLogin');

const secret = 'dara secret';

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    // if (!email || !password) {
    //   return res.status(401).json({ message: 'É necessário e-mail e senha' });
    // }

    const user = await serviceLogin.findUserByEmail(email);

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

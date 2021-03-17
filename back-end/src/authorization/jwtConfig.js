const jwt = require('jsonwebtoken');

const secret = 'Secret token';

const jwtSign = (payload, secret, jwtConfig) => (
  jwt.sign(payload, secret, jwtConfig)
)

const jwtConfig = {
  expiresIn: '150m',
  algorithm: 'HS256',
};

const createJWTPayload = (user) => ({
  iss: 'Trybeer',
  aud: 'indentity',
  userData: user,
  });

module.exports = {
  secret,
  jwtConfig,
  createJWTPayload,
  jwtSign
}
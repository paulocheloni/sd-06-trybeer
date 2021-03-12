const { body, validationResult } = require('express-validator');
const { messages } = require('../util/dataStatus');

const loginValidationRules = () => [
  body('email')
    .exists(),
  body('email')
    .isEmail()
    .withMessage({
      message: messages.dadosInvalidos,
    }),
  body('password')
    .exists()
    .isLength({ min: 6 }),
];

const UNAUTHORIZED = 401;

const validateLogin = (req, res, next) => {
  const errors = validationResult(req);
  const errorMsg = { message: messages.dadosInvalidos };

  if (errors.isEmpty()) return next();

  return res.status(UNAUTHORIZED).json(errorMsg);
};

module.exports = { loginValidationRules, validateLogin };

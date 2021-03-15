const { body, validationResult } = require('express-validator');
const { messages } = require('../util/dataStatus');

const registrationValidationRules = () => [
  body('email')
    .exists()
    .isEmail(),
  body('password')
    .exists()
    .isLength({ min: 6 }),
  body('name')
    .exists()
    .isAlpha()
    .isLength({ min: 12 }),
];

const UNAUTHORIZED = 401;

const validateRegistration = (req, res, next) => {
  const errors = validationResult(req);
  const errorMsg = { message: messages.dadosInvalidos };

  if (errors.isEmpty()) return next();

  return res.status(UNAUTHORIZED).json(errorMsg);
};

module.exports = { registrationValidationRules, validateRegistration };

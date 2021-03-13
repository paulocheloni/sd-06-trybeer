const { getByEmail } = require('../models/UsersService');

async function validateLogin(req, res, next) {
    const { email } = req.body.user;
    const [user] = await getByEmail(email);
    if (user) {
      res.locals.user = user;
      next();
    } else {
      next({ status: 404, message: 'not found' });
    }
}

module.exports = validateLogin;
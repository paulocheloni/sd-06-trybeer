const { session } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await session.login(body);
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

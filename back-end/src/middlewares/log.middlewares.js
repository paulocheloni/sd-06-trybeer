const { requestsLogger } = require('../utils/logger');

module.exports = async (req, _res, next) => {
  const log = {
    method: req.method,
    route: req.originalUrl,
  };

  requestsLogger.info(log);
  console.warn(log);
  next();
};

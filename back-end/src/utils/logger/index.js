const { createLogger, transports, format } = require('winston');

const { combine, timestamp, json } = format;

const requestsLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/requests.log',
      level: 'info',
      format: combine(
        timestamp(),
        json(),
      ),
    }),
  ],
});

const errorLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: combine(
        timestamp(),
        json(),
      ),
    }),
  ],
});

module.exports = {
  requestsLogger,
  errorLogger,
};

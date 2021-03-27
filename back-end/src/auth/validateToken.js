const jwt = require('jsonwebtoken');
const httpResponse = require('../../utils/httpResponses');
const httpStatusCode = require('../../utils/httpStatusCode');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

   if (!token) return httpResponse.UNAUTHORIZED; 

    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(httpStatusCode.UNAUTHORIZED)
          .json({ message: err.message });
      } 
      req.user = decoded;
    });

    next();
};

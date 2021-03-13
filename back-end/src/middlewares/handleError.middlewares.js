module.exports = (err, _req, res, _next) => {
  console.error({ err });
  const STATUS = err.statusCode || 500;
  const ERR = {
    message: err.customMessage || 'Erro interno',
    code: err.customCode || 'INTERNAL_ERROR',
  };
  res.status(STATUS).json(ERR);
};
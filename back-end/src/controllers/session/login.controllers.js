module.exports = async (_req, res, next) => {
  try {
    return res.status(200).json({ hello: 'World!' });
  } catch (err) {
    return next(err);
  }
};

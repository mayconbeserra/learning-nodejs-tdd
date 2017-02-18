export default function validate (req, res, next) {
  req.checkBody('name', 'Invalid name').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    const response = { errors: [] };
    errors.forEach((err) => {
      response.errors.push(err.msg);
    });
    res.statusCode = 400; // eslint-disable-line
    return res.json(response);
  }
  return next();
}

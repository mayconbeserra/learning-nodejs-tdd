export function validatePost (req, res, next) {
  req.checkBody('id', 'You cannot add the id inside the body').isEmpty();
  req.checkBody('name', 'Invalid name').notEmpty();

  const errors = req.validationErrors();

  if (errors) return sendErrors(errors, res);
  return next();
}

export function validatePut (req, res, next) {
  req.checkParams('id', 'Invalid Id').isInt();
  req.checkBody('id', 'You cannot add the id inside the body').isEmpty();
  req.checkBody('name', 'Invalid name').notEmpty();

  const errors = req.validationErrors();

  if (errors) return sendErrors(errors, res);
  return next();
}

const sendErrors = (errors, res) => {
  const response = { errors: [] };
  errors.forEach((err) => {
    response.errors.push(err.msg);
  });
  res.statusCode = 400; // eslint-disable-line
  return res.json(response);
};

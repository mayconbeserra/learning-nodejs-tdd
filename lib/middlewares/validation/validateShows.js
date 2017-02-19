'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePost = validatePost;
exports.validatePut = validatePut;
function validatePost(req, res, next) {
  req.checkBody('id', 'You cannot add the id inside the body').isEmpty();
  req.checkBody('name', 'Invalid name').notEmpty();

  var errors = req.validationErrors();

  if (errors) return sendErrors(errors, res);
  return next();
}

function validatePut(req, res, next) {
  req.checkParams('id', 'Invalid Id').isInt();
  req.checkBody('id', 'You cannot add the id inside the body').isEmpty();
  req.checkBody('name', 'Invalid name').notEmpty();

  var errors = req.validationErrors();

  if (errors) return sendErrors(errors, res);
  return next();
}

var sendErrors = function sendErrors(errors, res) {
  var response = { errors: [] };
  errors.forEach(function (err) {
    response.errors.push(err.msg);
  });
  res.statusCode = 400; // eslint-disable-line
  return res.json(response);
};
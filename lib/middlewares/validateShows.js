'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = validate;
function validate(req, res, next) {
  req.checkBody('name', 'Invalid name').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    var _ret = function () {
      var response = { errors: [] };
      errors.forEach(function (err) {
        response.errors.push(err.msg);
      });
      res.statusCode = 400; // eslint-disable-line
      return {
        v: res.json(response)
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return next();
}
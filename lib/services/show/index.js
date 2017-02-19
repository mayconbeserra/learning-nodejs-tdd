'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (repository) {
  return {
    detail: _detail2.default.bind(this, repository)
  };
};

var _detail = require('./detail');

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base;

var _validateShows = require('./validateShows');

var _validateShows2 = _interopRequireDefault(_validateShows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function base() {
  return {
    showsPost: _validateShows2.default
  };
}
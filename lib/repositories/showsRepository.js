'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base;

var _knex = require('../../db/knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function base() {
  return {
    getAll: getAll.bind(this),
    getById: getById.bind(this)
  };
}

var shows = function shows() {
  return (0, _knex2.default)('shows');
};

var getAll = function getAll() {
  return shows().select();
};

var getById = function getById(id) {
  var a = shows().where('id').first();
  return a;
};
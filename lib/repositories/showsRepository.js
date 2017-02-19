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
    getById: getById.bind(this),
    insert: insert.bind(this),
    update: update.bind(this)
  };
}

var shows = function shows() {
  return (0, _knex2.default)('shows');
};

var getAll = function getAll() {
  return shows().select();
};

var getById = function getById(showId) {
  return shows().where('id', parseInt(showId, 10)).first();
};

var insert = function insert(show) {
  return shows().insert(show, ['id', 'name', 'channel', 'genre', 'rating', 'explicit']);
};

var update = function update(id, updates) {
  return shows().where('id', parseInt(id, 10)).update(updates, ['id', 'name', 'channel', 'genre', 'rating', 'explicit']);
};
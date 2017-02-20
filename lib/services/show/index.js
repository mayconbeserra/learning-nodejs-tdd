'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (repository) {
  return {
    del: _delete2.default.bind(this, repository),
    list: _list2.default.bind(this, repository),
    detail: _detail2.default.bind(this, repository),
    create: _create2.default.bind(this, repository),
    update: _update2.default.bind(this, repository)
  };
};

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _detail = require('./detail');

var _detail2 = _interopRequireDefault(_detail);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
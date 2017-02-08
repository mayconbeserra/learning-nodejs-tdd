'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _showsRepository = require('../repositories/showsRepository');

var _showsRepository2 = _interopRequireDefault(_showsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.get('/api/v1/shows', function (req, res, next) {
    console.log('api');
    var repository = new _showsRepository2.default();
    repository.getAll().then(function (shows) {
      res.status(200).json(shows);
    }).catch(function (err) {
      console.log(err);
      next(err);
    });
  });
};
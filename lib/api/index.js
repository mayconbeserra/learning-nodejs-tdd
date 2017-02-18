'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _showsRepository = require('../repositories/showsRepository');

var _showsRepository2 = _interopRequireDefault(_showsRepository);

var _middlewares = require('../middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.get('/api/v1/shows', function (req, res, next) {
    var repository = new _showsRepository2.default();
    repository.getAll().then(function (shows) {
      res.status(200).json(shows);
    }).catch(function (err) {
      next(err);
    });
  });

  app.get('/api/v1/shows/:id', function (req, res, next) {
    var repository = new _showsRepository2.default();
    repository.getById(req.params.id).then(function (show) {
      res.status(200).json(show);
    }).catch(function (err) {
      next(err);
    });
  });

  app.post('/api/v1/shows', (0, _middlewares2.default)().showsPost, function (req, res, next) {
    var repository = new _showsRepository2.default();

    repository.insert(req.body).then(function (show) {
      res.status(200).json(show[0]);
    }).catch(function (err) {
      console.log(err);
      next(err);
    });
  });
};
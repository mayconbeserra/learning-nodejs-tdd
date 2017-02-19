'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _showsRepository = require('../repositories/showsRepository');

var _showsRepository2 = _interopRequireDefault(_showsRepository);

var _validation = require('../middlewares/validation');

var _validation2 = _interopRequireDefault(_validation);

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

  app.post('/api/v1/shows', (0, _validation2.default)().showsPost, function (req, res, next) {
    var repository = new _showsRepository2.default();

    repository.insert(req.body).then(function (show) {
      res.status(200).json(show[0]);
    }).catch(function (err) {
      next(err);
    });
  });

  app.put('/api/v1/shows/:id', (0, _validation2.default)().showsPut, function (req, res, next) {
    var repository = new _showsRepository2.default();

    repository.update(req.params.id, req.body).then(function (show) {
      res.status(200).json(show[0]);
    }).catch(function (err) {
      next(err);
    });
  });

  app.delete('/api/v1/shows/:id', (0, _validation2.default)().showsPut, function (req, res, next) {
    var repository = new _showsRepository2.default();

    repository.update(req.params.id, req.body).then(function (show) {
      res.status(200).json(show[0]);
    }).catch(function (err) {
      next(err);
    });
  });
};
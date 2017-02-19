'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _showsRepository = require('../repositories/showsRepository');

var _showsRepository2 = _interopRequireDefault(_showsRepository);

var _validation = require('../middlewares/validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (app) {
  app.get('/api/v1/shows', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
      var repository;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              repository = new _showsRepository2.default();
              _context.t0 = res.status(200);
              _context.next = 4;
              return repository.getAll();

            case 4:
              _context.t1 = _context.sent;

              _context.t0.send.call(_context.t0, _context.t1);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.get('/api/v1/shows/:id', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
      var repository;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              repository = new _showsRepository2.default();
              _context2.t0 = res.status(200);
              _context2.next = 4;
              return repository.getById(req.params.id);

            case 4:
              _context2.t1 = _context2.sent;

              _context2.t0.send.call(_context2.t0, _context2.t1);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  app.post('/api/v1/shows', (0, _validation2.default)().showsPost, function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
      var repository, result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              repository = new _showsRepository2.default();
              _context3.next = 3;
              return repository.insert(req.body);

            case 3:
              result = _context3.sent;
              return _context3.abrupt('return', result[0] !== null ? res.status(200).json(result[0]) : res.status(400));

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  app.put('/api/v1/shows/:id', (0, _validation2.default)().showsPut, function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
      var repository, result;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              repository = new _showsRepository2.default();
              _context4.next = 3;
              return repository.update(req.params.id, req.body);

            case 3:
              result = _context4.sent;
              return _context4.abrupt('return', result[0] !== null ? res.status(200).json(result[0]) : res.status(400));

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  app.delete('/api/v1/shows/:id', function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(req, res) {
      var repository, show;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              repository = new _showsRepository2.default();
              _context5.next = 3;
              return repository.getById(req.params.id);

            case 3:
              show = _context5.sent;


              if (!show) res.status(404).end();

              _context5.next = 7;
              return repository.delete(req.params.id);

            case 7:

              res.status(200).json(show);

            case 8:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
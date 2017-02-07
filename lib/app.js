'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.application = undefined;

var application = exports.application = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(config) {
    var app;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express2.default)();

            (0, _routes2.default)(app);

            app.use(function (err, req, res, next) {
              // eslint-disable-line consistent-return,no-unused-vars
              if (err) {
                return res.sendStatus(500);
              }
            });

            return _context.abrupt('return', app);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function application(_x) {
    return _ref.apply(this, arguments);
  };
}();

var start = exports.start = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(config) {
    var app;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return application(config);

          case 3:
            app = _context2.sent;

            console.log('## Debugging 2 ### ');
            console.log(config);
            app.listen(config.env.http.port, config.env.http.host, function () {
              console.log('listening'); /* eslint no-console:0 */
            });
            _context2.next = 11;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));

  return function start(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
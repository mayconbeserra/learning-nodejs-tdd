'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validation = require('../middlewares/validation');

var _validation2 = _interopRequireDefault(_validation);

var _show = require('./show');

var show = _interopRequireWildcard(_show);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRoute = function wrapRoute(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn(args).catch(args[2]); // call next()
  };
};

exports.default = function (app) {
  var baseUrl = '/api/v1/shows';
  app.get('/api/v1/shows', wrapRoute(show.list));
  app.get(baseUrl + '/:id', wrapRoute(show.detail));
  app.put(baseUrl + '/:id', (0, _validation2.default)().showsPut, wrapRoute(show.update));
  app.post('' + baseUrl, (0, _validation2.default)().showsPost, wrapRoute(show.create));
  app.delete(baseUrl + '/:id', wrapRoute(show.del));
  app.get('/_ping', function (req, res) {
    res.status(200).end();
  });

  app.use(function (req, res) {
    res.status(404).end();
  });
};
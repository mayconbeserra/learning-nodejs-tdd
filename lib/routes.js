'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get('/api/v1/shows', function (req, res) {
    res.status(200).end();
  });
};
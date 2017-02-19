'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    showsPost: _validateShows.validatePost,
    showsPut: _validateShows.validatePut
  };
};

var _validateShows = require('./validateShows');
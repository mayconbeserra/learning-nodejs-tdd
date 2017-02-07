// enables ES6 support
require('babel-core/register');
require('babel-polyfill');

require(process.env.NODE_ENV === 'production' ? '../lib' : '../src/app.js').start(require('../config').default);

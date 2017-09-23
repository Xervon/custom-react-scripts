'use strict';

const resolve = require('path').resolve;

module.exports = aliases =>
  aliases.reduce((acc, val) => {
    const alias = val.split(':'),
      name = alias[0],
      target = alias[1];

    return Object.assign({}, acc, {
      [name]: resolve(__dirname, target),
    });
  }, {});

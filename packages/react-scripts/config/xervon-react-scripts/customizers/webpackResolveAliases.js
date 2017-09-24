'use strict';

const resolve = require('path').resolve;

const pwd = process.env.PWD;

module.exports = aliases =>
  aliases.reduce((acc, val) => {
    const alias = val.split(':'),
      name = alias[0],
      target = alias[1];

    if (name && target) {
      return Object.assign({}, acc, {
        [name]: resolve(pwd, target),
      });
    }
  }, {});

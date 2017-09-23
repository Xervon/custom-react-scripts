'use strict';

module.exports = (isDev = true) => ({
  resolve: {
    alias: require('./customizers/webpackAliases.js')(
      Object.keys(process.env)
        .filter(e => e.indexOf('REACT_APP_ALIAS_') > -1)
        .map(e => process.env[e])
    ),
  },
});

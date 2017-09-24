'use strict';

module.exports = (isDev = true) => ({
  resolve: {
    alias: (() => {
      const availKeys = Object.keys(process.env).filter(
        e => e.indexOf('REACT_APP_RESOLVE_ALIAS_') > -1
      );
      return require('./customizers/webpackResolveAliases.js')(
        availKeys.map(e => process.env[e]),
        availKeys
      );
    })(),
    plugins: (() => {
      const availKeys = Object.keys(process.env).filter(
        e => e.indexOf('REACT_APP_RESOLVE_PLUGINS_') > -1
      );
      return require('./customizers/webpackResolvePlugins.js')(
        availKeys.map(e => process.env[e]),
        availKeys
      );
    })(),
  },
});

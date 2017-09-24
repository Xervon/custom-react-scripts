'use strict';
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const plugins = {
  REACT_APP_RESOLVE_PLUGINS_DIRECTORY_NAMED: () =>
    new DirectoryNamedWebpackPlugin(),
};

module.exports = (values, keys) =>
  keys.reduce((acc, val, idx) => {
    if (values[idx] === 'true') {
      return acc.concat([plugins[val]()]);
    }
  }, []) || [];

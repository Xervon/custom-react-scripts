const DashboardPlugin = require('webpack-dashboard/plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  DIRECTORY_NAMED: {
    get: () => new DirectoryNamedWebpackPlugin(),
  },
  WEBPACK_DASHBOARD: {
    get: () => new DashboardPlugin(),
  },
};

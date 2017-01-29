const webpack = require('webpack');

module.exports = {
  output: { path: `${__dirname}/dist`, filename: '[name].js', libraryTarget: 'umd' },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader', 'eslint-loader' ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules|assets\/tiles/,
        loader: 'json',
      },
    ],
  },
  resolve: { alias: { asskee: `${__dirname}/src` } },
  plugins: [],
  stats: {
    colors: true,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
  }
};

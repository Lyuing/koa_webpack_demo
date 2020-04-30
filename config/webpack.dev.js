
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheep-module-eval-source-map',
  devServer: {
    hot: true,
    open: false,
    host: '10.20.12.138',
    port: 1234,
    proxy: {
      '/api': {
        target: 'http://10.20.12.138:3000/',
        pathRewrite: {'^/api': ''}
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: './public/', to: '' },
    ]),
  ],
  devServer: {
    contentBase: './dist'
  }
};

module.exports = config;
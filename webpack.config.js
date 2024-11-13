const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  devServer: {
    static: './',
    port: 3000,
  },
};
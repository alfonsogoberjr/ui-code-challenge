'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    './client/styles/src/bundle.scss',
    './client/js/src/main.js'
  ],
  output: {
      filename: './client/js/bundle.min.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client', 'js', 'src'),
        loader: 'babel-loader',
        query: {
          plugins: [
            "add-module-exports",
            "transform-class-properties",
            "transform-decorators-legacy",
            "transform-runtime"
          ],
          presets: [
            "es2015",
            "stage-0"
          ],
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'client', 'styles', 'src'),
        loaders: ["style", "css", "autoprefixer", "sass"]
      },
      {
        test: /\.html$/,
        loaders: ['raw']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    })
  ],
  debug: true,
  resolve: { modulesDirectories: ['node_modules', 'client/js', 'client/styles'], extension: ['', '.js', '.scss'] }
}

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry:  [
    'babel-polyfill',
    './js/Main.jsx',
  ],
	context: path.join(__dirname, 'app'),
  plugins: [
    new CopyWebpackPlugin([
      { from: './static/', to: 'static/' },
      { from: './index.html' },
    ])
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname),
    filename: 'app.js',
    sourceMapFilename: 'app.js.map',
  },
  response: './',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
        plugins: ['transform-runtime'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ttf|otf|png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
      },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
};

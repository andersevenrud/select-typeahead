const WebPack = require('webpack');
const UglifyJsPlugin = WebPack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: {
    'select-typeahead': [
      './select-typeahead.js',
      './select-typeahead.css'
    ]
  },

  output: {
    path: __dirname + '/dist/',
    sourceMapFilename: '[file].min.map',
    filename: '[name].min.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].min.css'),
    new UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ]
  },
};
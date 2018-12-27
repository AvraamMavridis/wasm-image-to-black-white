// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "index.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      filename: 'index.html',
      inject: 'head'
    })
  ],
  mode: "development"
};

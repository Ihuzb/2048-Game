const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  }
}
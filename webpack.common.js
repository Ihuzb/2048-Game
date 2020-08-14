const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: './src/index.js',
    vue:'./src/vue.min.js'
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
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: 'vue',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
}
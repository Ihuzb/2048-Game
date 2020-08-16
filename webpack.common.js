const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: './src/index.js',
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
      minChunks: 1, // 模块的最小被引用次数
      cacheGroups: {
        src: {
          test: /[\\/]src[\\/]public[\\/]/,
          minSize: 0
        }
      }
    },

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
}
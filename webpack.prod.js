const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
    })
    ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    publicPath: "./",
  }
})
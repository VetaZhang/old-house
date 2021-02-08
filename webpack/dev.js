
const path = require('path');
const webpack = require('webpack');
const merger = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpackConfig = require('./common');

// 不显示 DeprecationWarning
process.noDeprecation = true;

const devWebpackConfig = {
  mode: 'development',
  devtool: 'eval',
  // stats: 'errors-only',
  devServer: {
    historyApiFallback: true,
    hot: true,
    // open: true,
    port: 3000,
    disableHostCheck: true,
  },
  stats:{
    modules: true,
    children: true,
    chunks: true,
    chunkModules: true
  },
  entry: {
    bundle: [
      // 'webpack-hot-middleware/client',
      // 'react-hot-loader/patch',
      `${path.resolve()}/src/index.jsx`,
    ],
  },
  output: {
    path: path.resolve(),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          // 'react-hot-loader/webpack',
          // 'babel-loader'
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                require.resolve('react-refresh/babel'),
              ],
            },
          },
        ],
        exclude: /node_modules/
      }, 
    ]
  },
  optimization: {
    splitChunks: {
      chunks() {
        return false;
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

module.exports = merger(commonWebpackConfig, devWebpackConfig);



const path = require('path');
const webpack = require('webpack');
const merger = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const commonWebpackConfig = require('./common');

// 不显示 DeprecationWarning
process.noDeprecation = true;

const devWebpackConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval',
  // stats: 'errors-only',
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 8000,
    // disableHostCheck: true,
  },
  stats:{
    modules: true,
    children: true,
    chunks: true,
    chunkModules: true
  },
  entry: {
    bundle: [
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
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
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
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HTMLPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body'
    })
  ],
};

module.exports = merger(commonWebpackConfig, devWebpackConfig);


const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'less', 'scss'],
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    alias: {
      '@src': path.resolve('./src'),
      '@page': path.resolve('./src/page'),
      '@container': path.resolve('./src/container'),
      '@component': path.resolve('./src/component'),
      '@config': path.resolve('./src/config'),
      '@api': path.resolve('./src/api'),
      '@util': path.resolve('./src/util'),
      '@router': path.resolve('./src/router'),
      '@commonLess': path.resolve('./src/app.less'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
              },
            }
          },
          'less-loader'
        ],
      }
    ]
  },
};

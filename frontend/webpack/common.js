const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'less', 'scss'],
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    alias: {
      'pages': path.resolve('./src/pages'),
      'containers': path.resolve('./src/containers'),
      'components': path.resolve('./src/components'),
      'config': path.resolve('./src/config'),
      'api': path.resolve('./src/api'),
      'utils': path.resolve('./src/utils'),
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
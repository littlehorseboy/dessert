const path = require('path');
const webpack_module = require('./webpack_module.js');

module.exports = [
  {
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
  {
    entry: './src/js/product/product.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle-product.js',
    },
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
  {
    entry: './src/js/login/login.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle-login.js',
    },
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
  {
    entry: './src/js/cart/cart.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle-cart.js',
    },
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
];

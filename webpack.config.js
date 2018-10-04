const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack_module = require('./webpack_module.js');

module.exports = [
  {
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
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
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'product.html',
        template: 'product.html',
      }),
    ],
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
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'login.html',
        template: 'login.html',
      }),
    ],
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
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'cart.html',
        template: 'cart.html',
      }),
    ],
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
  {
    entry: './src/js/checkout/checkout.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle-checkout.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'checkout.html',
        template: 'checkout.html',
      }),
    ],
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
];

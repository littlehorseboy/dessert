const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack_module = require('./webpack_module.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      new MiniCssExtractPlugin({
        filename: 'index.[name].css',
        chunkFilename: 'index.[id].css',
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
      new MiniCssExtractPlugin({
        filename: 'product.[name].css',
        chunkFilename: 'product.[id].css',
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
      new MiniCssExtractPlugin({
        filename: 'login.[name].css',
        chunkFilename: 'login.[id].css',
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
      new MiniCssExtractPlugin({
        filename: 'cart.[name].css',
        chunkFilename: 'cart.[id].css',
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
      new MiniCssExtractPlugin({
        filename: 'checkout.[name].css',
        chunkFilename: 'checkout.[id].css',
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
    entry: './src/js/checkout-success/checkout-success.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle-checkout-success.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'checkout-success.html',
        template: 'checkout-success.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'checkout-success.[name].css',
        chunkFilename: 'checkout-success.[id].css',
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

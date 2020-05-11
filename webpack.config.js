const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
        ],
        },
      ],
  },

  plugins: [
    
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),

    new MiniCssExtractPlugin({
    filename: "style.css",
  })],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
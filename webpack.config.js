const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundled.js',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css|s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin({
      extensions: ['jsx'],
    }),
  ],
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}

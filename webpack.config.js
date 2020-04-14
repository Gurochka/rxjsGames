var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  
  resolve: {
    alias: {
      App: path.resolve(__dirname + '/src/app')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/app'),
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },

  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/public/index.html"
      })
  ],

  devServer: {
    port: 9000,
    open: true,
    historyApiFallback: true
  }
};
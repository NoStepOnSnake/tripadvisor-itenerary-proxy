const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [ /node_modules/, /itinerary/, /gallery/, /reviews/, /calendar/],
        loader: [{
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react'],
          }
        }]
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
const path = require('path');

module.exports = {
  entry: './src/lottie-player.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'lottie-player.js',
    path: path.resolve(__dirname, './dist'),
  },
};

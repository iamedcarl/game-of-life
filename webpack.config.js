module.exports = {
  entry: "./lib/game_of_life.js",
  output: {
    filename: "./lib/bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};

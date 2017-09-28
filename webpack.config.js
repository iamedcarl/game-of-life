module.exports = {
  entry: "./public/lib/game_of_life.js",
  output: {
    filename: "./public/lib/bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};

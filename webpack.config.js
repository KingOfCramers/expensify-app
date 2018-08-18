const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const cssExtract = new ExtractTextPlugin("styles.css"); // will make separate css file inside public build.
  const isProduction = env === "production";

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: cssExtract.extract({ // Extract it, before processing...This allows us to put it into a separate .css file
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true // Development friendly build....
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      cssExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // Only use longer, more complex sourcemap in development mode.
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // Sends index for webpack server
      publicPath: "/dist/"
    }
  };
};
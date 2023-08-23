const path    = require("path")
const webpack = require("webpack")

// local configuration
const paths = require('./configuration/paths')
const aliasConfig = require('./configuration/aliases')

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  resolve: {
    modules: ["app/javascript", "node_modules"],
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {modules: false}
            ]
          ]
        }
      }
    }
  ]
}

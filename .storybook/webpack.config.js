const env = require("dotenv")
const fs = require("fs")
const path = require("path")
const sharify = require("./sharify")

const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { CheckerPlugin } = require("awesome-typescript-loader")
const StatsPlugin = require("stats-webpack-plugin")

/**
 * Write out a file that stubs the data that’s normally shared with the client through the `sharify` module. This file
 * is then replaced in the product of webpack where normally the actual `sharify` module would be loaded.
 */
const { METAPHYSICS_ENDPOINT } = env.config().parsed
const sharifyPath = sharify({ METAPHYSICS_ENDPOINT })

// A mix of  the base from Emission's webpack setup, and the simple config for
// storybooks: https://storybook.js.org/configurations/custom-webpack-config/

module.exports = {
  devtool: "#inline-source-map", // Otherwise getting errors about e.g. `Relay` not being defined.
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      sharify: sharifyPath.replace(/\.js$/, ""),
    },
  },
  cache: true,
  module: {
    rules: [
      { test: /\.json$/, loader: "json-loader" },
      {
        exclude: [/node_modules/, /__tests__/],
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              useBabel: true,
              useCache: true,
              useTranspileModule: true, // Supposedly faster, won’t work if/when we emit TS declaration files.
            },
          },
        ],
        test: /\.tsx?$/,
      },
    ],
  },
  profile: true,
  plugins: [
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new StatsPlugin(
      "stats.json",
      {
        chunkModules: true,
        exclude: [/node_modules[\\\/]react/],
      },
      {}
    ),
  ],
}

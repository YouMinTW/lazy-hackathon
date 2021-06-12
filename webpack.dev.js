const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, //3. Inject styles into DOM
          { loader: "css-loader" }, //2. Turns css into commonjs
          // {
          //   loader: "resolve-url-loader",
          //   options: {},
          // }, //1. Turns sass into css
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false,
            },
          }, //1. Turns sass into css
        ],
      },
    ],
  },
});

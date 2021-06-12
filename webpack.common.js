module.exports = {
  entry: {
    main: "./src/index.js",
    path: __dirname + "/dist",
    //vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            // name: "[name].[hash].[ext]",
            outputPath: "image",
          },
        },
      },
    ],
  },
};

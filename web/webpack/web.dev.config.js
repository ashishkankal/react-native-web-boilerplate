const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "../../app/web/index")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        PLATFORM_ENV: JSON.stringify("web")
      }
    })
  ],
  output: {
    path: path.join(__dirname, "../public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "web/public/",
    hot: true
  }
};

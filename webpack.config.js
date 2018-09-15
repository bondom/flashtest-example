const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src"),
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"],
              plugins: ["transform-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App title",
      template: path.join(__dirname, "src", "index.html"),
      inject: "body",
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        WRITE_TEST: JSON.stringify(process.env.WRITE_TEST)
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 8002,
    compress: false,
    hot: true,
    stats: "errors-only",
    open: false,
    clientLogLevel: "none",
    historyApiFallback: {
      disableDotRule: true
    }
  }
};

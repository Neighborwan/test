// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 开发环境
  mode: "development",

  // 入口文件
  entry: {
    app: "./src/index.tsx",
  },

  // 输入位置
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 可以使用最新的 js 特性
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // less
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true, // 变量覆盖要用
              },
            },
          },
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello world",
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  devServer: {
    hot: true,
    port: 9527,
    historyApiFallback: true, // 单页应用，重定向需要
  },
};

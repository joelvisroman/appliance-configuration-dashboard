const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    filename: "./index.js"
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 8080
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: "ts-loader",
        exclude: ["/node_modules", "/**/*.test.tsx"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};

const PerspectivePlugin = require("@finos/perspective-webpack-plugin");
const htmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: process.env.NODE_DEV || "development",
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'index.js', // Output file name
  },
  plugins: [
    new htmlWebPackPlugin({ 
        title: "Workspace Example", 
        template: "./src/index.html",
    }), 
    new PerspectivePlugin({}),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
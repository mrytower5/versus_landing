const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
const webpack = require('webpack');
const DotEnv = require('dotenv-webpack'); 
const dotEnvPlugin = new DotEnv({
  path: "./.env",
  systemvars: true
}); 

module.exports = {

entry: './src/index.js',
mode: 'development',
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
 {
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[hash]-[name].[ext]',
        },
      },
    ],
  },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  },
]},
 plugins: [
   htmlPlugin,
  dotEnvPlugin
]
};
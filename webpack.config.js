var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var path = require('path');

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  build: path.join(__dirname, 'build')
};


module.exports = {
  context: PATHS.build,
  entry: {
    page1: "./src/page1/entry.js",
    page2: "./src/page2/entry.js",
    vendor: ['jquery','react']
  },
  output: {
    path: PATHS.dist,
    filename:  "js/[name].js",
    publicPath: ""
  },
  cache: false,
  module: {
    loaders: [

      // Bable Transpiler, ES6
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],
          compact: false
        },
        exclude: /(node_modules)/
      },

      // Images
      {
        test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=images/[name].[ext]'
      },

      // CSS and Less
      {test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader", {publicPath: "../"}) },

      // Bootstrap
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&&name=fonts/[name].[ext]'},

      
    ]
  },
  plugins: [

    new webpack.DefinePlugin({
       DIR_JS: "js/" 
    }),

    // jQuery Global Access
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "js/common.js",
      minChunks: 2,
      chunks: ["page1", "page2"],
    }),

    // Page 1 Template
    new HtmlWebpackPlugin({
      title: "Page 1 - index.html",
      filename: "index.html",
      inject: "body",
      template: "templates/template.html",
      chunks: ['common','page1']
    }),

    // Page 2 Template
    new HtmlWebpackPlugin({
      title: "Page 2 - page2.html",
      filename: "page2.html",
      template: "templates/template.html",
      chunks: ['common','page2']
    }),

    new ExtractTextPlugin("css/[name].css"),

    new CopyWebpackPlugin([{ from: '../build/images', to: 'images/', force: true }]),

    // Minify assets.
    new webpack.optimize.UglifyJsPlugin({
       mangle: false, 
       compress: {warnings: false}
    })

 ]    
}

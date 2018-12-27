const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".gql", ".graphql", ".mjs"]
  },
  devServer: {
    contentBase: './dist',
    overlay: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development plugin',
      template: './public/template.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
        { 
          test: /\.(tsx|ts)$/, 
          loader: ["awesome-typescript-loader"],
          exclude: /node_modules/ 
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 80192
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { 
          enforce: "pre", 
          test: /\.js$/, 
          loader: "source-map-loader" 
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
    ]
  },
};

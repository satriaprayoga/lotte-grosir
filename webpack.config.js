const path=require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports={
    entry:{
        main:'./src/js/main.js',
        vendor:'./src/js/vendor.js'
    },
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.s[c|a]ss$/,
                use: ['style-loader', 
                        MiniCssExtractPlugin.loader, 
                        'css-loader', 
                        'postcss-loader', 
                        'sass-loader']
            }
        ]
    }
};
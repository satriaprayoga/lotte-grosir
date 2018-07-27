const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports={
    target:"web",
    devtool:"source-map",
    entry:{
        index:'./src/index.js',
        fontawesome:'./src/js/fontawesome'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'js/[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["env","minify"]
                    }
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader',
                    options:{minimize:true}
                }
            },
            {
                test: /\.s[c|a]ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: {
                                discardComments: {
                                    removeAll: true
                                }
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jp?eg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            name: '/[name].[ext]',
                            outputPath:"images/"
                        }
                    }
                ]
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: "index.html"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"

        })
    ],
    optimization: {
		splitChunks: {
			cacheGroups: {
				index: {
					name: "index",
					test: "index",
					enforce: true
				},
				bootstrap: {
					test: new RegExp("node_modules" + "\\" + path.sep + "bootstrap.*"),
					chunks: "initial",
					name: "bootstrap",
					enforce: true
				},
				fontawesome: {
					name: "fontawesome",
					test: "fontawesome",
					enforce: true
				},
				jquery: {
					test: new RegExp("node_modules" + "\\" + path.sep + "jquery.*"),
					chunks: "initial",
					name: "jquery",
					enforce: true
				},
				popper: {
					test: new RegExp("node_modules" + "\\" + path.sep + "popper.*"),
					chunks: "initial",
					name: "popper",
					enforce: true
				}
			}
		}
    },
    devServer: {
		host: "localhost",
		port: 3000,
		contentBase: "./public",
		open: true,
		inline: true,
		disableHostCheck: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
}
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const argv = require('yargs').argv;
// console.log('环境参数', argv);
const util = require('./util')
const htmlPluginArray = util.getHtml();
// console.log(htmlPluginArray);

module.exports = {
    // cheap-module-source-map 
    // entry: {
    //     index: './page/index.js',
    //     demo: './page/demo.js',
    //     // jquery: 'jquery'
    // },
    entry: util.getEntry(),
    output: {
        // TODO: 1、index.html打入所有的js(htmlplugin的chunk) 2、publicPath为./
        filename: '[name]/js/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        publicPath: '' // __webpack_public_path__ = myRuntimePublicPath;入口文件顶部
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: [
                        // ['@babel/preset-env', {
                        //     useBuiltIns: 'usage',
                        //     corejs: 3
                        // }]
                        // ]
                    },
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                type: 'asset/resource',
                parser: {
                    // TODO 不生效
                    dataUrlCondition: {
                        maxSize: 4 * 1024,
                    },
                }
            },
            // { // TODO 不生效
            //     test: /\.html/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'static/[hash][ext][query]'
            //     }
            // },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                    },
                    "less-loader"
                ],
            }
        ]
    },
    plugins: [
        ...htmlPluginArray,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[hash][ext][query]'
        })
    ],
}

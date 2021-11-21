const path = require('path');
const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        // hot: true,
        // compress: true,
        port: 9000,
    },
};
module.exports = merge(baseConfig, devConfig)
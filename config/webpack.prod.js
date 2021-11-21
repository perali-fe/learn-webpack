const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");
const Bundle = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    optimization: {
        minimizer: [
            // TODO 未生效
            new CssMinimizerPlugin(),
            new Terser()
        ]
    },
    plugins: [
        new Bundle()
    ]

};
module.exports = merge(baseConfig, prodConfig)
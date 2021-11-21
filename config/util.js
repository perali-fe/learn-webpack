const glob = require("glob");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntry() {
    const entry = {};
    const filePath = path.resolve(__dirname, '../src/page/*/main.js')
    glob.sync(filePath).forEach(function (filePath) {
        let name = filePath.match(/\/page\/(.+)\/main.js/)[1];
        entry[name] = filePath;
    })
    return entry;
}
function getHtml() {
    const html = [];
    const filePath = path.resolve(__dirname, '../src/page/*/main.js')
    glob.sync(filePath).forEach(function (filePath) {
        let name = filePath.match(/\/page\/(.+)\/main.js/)[1];
        html.push(new HtmlWebpackPlugin({
            filename: './' + name + '/index.html',
            template: './src/index.html',
            chunks: [name]
        }))
    })
    return html;
}
module.exports = {
    getEntry,
    getHtml
}
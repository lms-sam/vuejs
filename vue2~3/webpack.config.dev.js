var config = require('./webpack.config.base.js');
const webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
config.module.loaders.push(
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap!postcss-loader'
    },
    {
        test : /\.scss$/,
        loader : 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader'
    }
);
config.vue = {};
config.devtool = 'source-map';
config.vue.loaders = {
    css: 'vue-style-loader!css-loader?sourceMap!postcss-loader',
    scss: 'vue-style-loader!css-loader?sourceMap!postcss-loader!sass-loader'
};
config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('dev')
        }
    }),
    new OpenBrowserPlugin({
        url: 'http://test.yinyuetai.com:8080' + '?jump'
    })
]);
module.exports = config;

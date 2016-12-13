var webpack = require('webpack');
var path = require('path');
var containerPath = path.resolve('./');
var alias = require('./bin/alias.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//入口
module.exports = {
    entry: {
        index : path.join(containerPath, '/src/main.js'),
        vendor : ['vue']
    },
    output: {
        path: path.join(containerPath, './dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:16].js'
    }
};
//模块的处理
module.exports.module = {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },
        {
			test : /\.vue$/,
			loader : 'vue'
		},
        {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader',
			query: {
				limit: 8192,
				name: './images/[name].[ext]?[hash:8]'
			}
		}
    ]
};
//
module.exports.babel = {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime', ['component', [{
        'libraryName': 'mint-ui',
        'style': true
    }]]]
};
//拓展名、别名
module.exports.resolve = {
    extensions: ['', '.js', '.vue'],
    alias: alias
};
//插件
module.exports.plugins = [
    new HtmlWebpackPlugin({
        title: 'My first react app',
        template: './index.html',
        filename: 'index.html',
        chunks: ['index', 'vendors'],
        inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.NoErrorsPlugin() //报错但不退出webpack进程
];

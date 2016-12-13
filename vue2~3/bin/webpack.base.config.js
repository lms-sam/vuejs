var webpack = require('webpack');
var path = require('path');
var containerPath = path.resolve('./');//绝对路径
var alias = require('./alias'); //别名
//plugins
var CleanWebpackPlugin = require('clean-webpack-plugin');//清除打包文件夹
var config = {
	entry : {
		index : './app/src/main.js'
	},
	output : {
		path: path.resolve(containerPath,'./app/www/'),
	    publicPath: './',
	    filename: '[name].js'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			//处理vue以外的scss文件
			// {
			// 	test : /\.scss$/,
			// 	loader : ExtractScss.extract(['css','sass'])
			// },
			{
				test : /\.vue$/,
				loader : 'vue'
			},
			//处理url压缩图片小于8k的图片成base64
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				query: {
					limit: 8192,
					name: './images/[name].[ext]?[hash:8]'
				}
			}
		]
	},
	babel : {
		presets: ['es2015', 'stage-0'],
		plugins: ['transform-runtime', ['component', [{
			'libraryName': 'mint-ui',
			'style': true
		}]]]
	},
	devtool:'source-map',
	resolve : {
		alias : alias ,
		extensions: ['', '.js', '.css', '.scss', '.jade', '.png', '.jpg']
	},
	vue : {
	},
	plugins : [
		//清除打包文件
		new CleanWebpackPlugin(['app/www'],{
			root : containerPath,//绝对路径
			verbose: true, //写日志到console
			dry: false //不删除任何东西，好进行测试
		}),
		//提取公共js
		new webpack.optimize.CommonsChunkPlugin('common','common.js'),//common需要对应上htmlwebpackplugin的chunks报错webpackJsonp
		//配置环境变量
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		//以下插件未知
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.BannerPlugin('vue'),
	],
	externals: {
		jquery: 'window.jQuery',
	}
};
module.exports = config;
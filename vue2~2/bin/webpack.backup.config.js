var webpack = require('webpack');
var path = require('path');
var containerPath = path.resolve('./');//绝对路径
var alias = require('./alias'); //别名
//plugins
var CleanWebpackPlugin = require('clean-webpack-plugin');//清楚打包文件夹
var HtmlWebpackPlugin = require('html-webpack-plugin');//处理html
var ExtractTextPlugin = require('extract-text-webpack-plugin');//将文件分离出来
var ExtractScss = new ExtractTextPlugin('[name].[contenthash:9].css');//scss
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
			{
				test : /\.scss$/,
				loader : ExtractScss.extract(['css','sass'])
			},
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
		loaders : {
			css: 'vue-style-loader!css-loader?sourceMap!autoprefixer-loader',
			scss: 'vue-style-loader!css-loader?sourceMap!autoprefixer-loader!sass-loader'
		}
	},
	plugins : [
		//清楚打包文件
		new CleanWebpackPlugin(['app/www'],{
			root : containerPath,//绝对路径
			verbose: true, //写日志到console
			dry: false //不删除任何东西，好进行测试
		}),
		//处理html
		new HtmlWebpackPlugin({
			template:'./index.html',
			filename : 'index.html',
			title : 'Hello World app',//生成新的html页面的title;
			inject : true,// true | 'head' | 'body' | false ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
			minify:{ //压缩HTML文件　
				removeComments:false, //移除HTML中的注释
				collapseWhitespace:false //删除空白符与换行符
			},
			chunks: ['common', 'index'],
		}),
		ExtractScss,
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
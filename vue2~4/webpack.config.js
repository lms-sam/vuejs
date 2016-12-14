var webpack = require("webpack");
var path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath = 'http://test.yinyuetai.com:8080/';

module.exports = {
    entry: {
        index: './src/main.js',
        common: ['vue', 'vue-router', 'vue-resource', 'vuex'],
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api/*': {
                target: 'localhost:8080',
                secure: false
            }
        }
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
    },
    module: {
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            },
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader')
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                // test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }, {
                // test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                loader: "url-loader?limit=10000&name=fonts/[name].[ext]&minetype=application/font-woff"
            },
        ]
    },
    // 转化成es5的语法
    babel: {
        presets: ["es2015", "stage-0"],
        "plugins": ["transform-runtime", ["component", [{
            "libraryName": "mint-ui",
            "style": true
        }]]]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("vue-style-loader", "css-loader?sourceMap"),
            scss: ExtractTextPlugin.extract("vue-style-loader", "css-loader?sourceMap!sass-loader"),
        }
    },
    plugins: [
        new ExtractTextPlugin('[name].[hash].css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlwebpackPlugin({
            title: 'My first vue app',
            template: './index.html',
            filename: 'index.html',
            chunks: ['index', 'common'],
            hash: true,
            inject: true
        }),
        new OpenBrowserPlugin({
            url: publicPath
        })
    ]
}


// 判断环境
var prod = process.env.NODE_ENV === 'production';
// console.log(prod);
module.exports.plugins = (module.exports.plugins || []);
if (prod) {
    module.exports.devtool = 'source-map';
    module.exports.plugins = module.exports.plugins.concat([
        new CleanWebpackPlugin(['build'], {
            root: '', //绝对路径
            verbose: true, //写日志到console
            dry: false //不删除任何东西，好进行测试
        }),
        // 借鉴vue官方的生成环境配置
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin('vue')
    ]);
} else {
    module.exports.devtool = 'eval-source-map';
}

var config = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//将文件分离出来
var ExtractScss = new ExtractTextPlugin('[name].[contenthash:9].css');//scss
var HtmlWebpackPlugin = require('html-webpack-plugin');//处理html
config.module.loaders.push(
    {
        test : /\.scss$/,
        loader : ExtractScss.extract(['css'])
    },
    {
        test : /\.scss$/,
        loader : ExtractScss.extract(['css','sass'])
    }
);
config.vue.loaders = {
    css: ExtractScss.extract("vue-style-loader", "css-loader?sourceMap!autoprefixer-loader"),
    scss: ExtractScss.extract("vue-style-loader", "css-loader?sourceMap!autoprefixer-loader!sass-loader")
};
config.plugins.push(ExtractScss);
config.plugins.push(
    //处理html
    new HtmlWebpackPlugin({
        template:'./index.html',
        filename : 'index.html',
        title : 'Hello World app',//生成新的html页面的title;
        inject : true,// true | 'head' | 'body' | false ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
        minify:{ //压缩HTML文件　
            removeComments:true, //移除HTML中的注释
            collapseWhitespace:true //删除空白符与换行符
        },
        chunks: ['common', 'index'],
    }));
module.exports = config;
# What and How to Use Them?
## webpack
> 模块打包工具

### cli配置参数
- --config 使用配置文件名字
- --watch 监听代码变化
- --colors 有颜色区分
- --optimize-minimize 压缩代码

## config参数
- .entry 入口文件可以多入口或者单入口{}/PathString
- .output 
    1. path 路径
    2. publicPath 发布后url的cdn地址[参考](https://segmentfault.com/q/1010000004674968)
    3. filename [name].js  输出文件名字跟入口保持一致的写法。否则写死
- [.devtool](http://www.cnblogs.com/hhhyaaon/p/5657469.html)
- .module.loaders(list){test:/\.jade$/,loader:'jade',exclude: /(node_modules)/}
    1. test 正则匹配文件后缀
    2. loader 插件名字
    3. exclude 排除文件
- .plugins(list) 插件
- .resolve.alias(json) 别名
- .resolve.extensions(list) 自动配对后缀名
- .externals(json) 全局变量
{
    jquery: 'window.jQuery',
    backbone: 'window.Backbone',
    underscore: 'window._'
}

### [optimize插件项](http://webpack.github.io/docs/list-of-plugins.html)
- webpack.optimize.CommonsChunkPlugin(options)//分离公共项

### webpack loader
- css-loader
- sass-loader
- url-loader 转换成base64

### plugins
- extract-text-webpack-plugin 分离文件通常css
```
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    var extractSASS = new ExtractTextPlugin('[name]-[hash].css');
    plugins.push(extractSASS);
    //loader
    {
        test: /\.scss$/i,
        loader: extractSASS.extract(['css','sass'])
    },
```
- html-webpack-plugin 处理html new HtmlWebpackPlugin(conf)
```
    var conf = {
        filename: chunkname+'.html',
        template: pages[chunkname],
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        },
        chunks: ['common',chunkname],
        hash: false,
        complieConfig: compileConfig
      }
    var titleC = compileConfig.title || {};
    var title = titleC[chunkname];
    if (title) {
        conf.title = title;
    }
    plugins.push(new HtmlWebpackPlugin(conf));
```
    

## browser-sync
```
    
```



## [glob](https://github.com/isaacs/node-glob)
> 获取文件

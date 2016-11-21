var config = require('./webpack.config.base.js');
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
module.exports = config;

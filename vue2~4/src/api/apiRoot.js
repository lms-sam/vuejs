import Config from '../config/url-config.js';
var env = Config.env[Config.scheme];

// 处理url地址
var apiRoot = function() {
    return env.url_prefix;
}

var apiRoot2 = function() {
    return env.url_prefix2;
}

module.exports = {
    apiRoot,
    apiRoot2
}

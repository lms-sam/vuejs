var config = {
    "scheme": "beta",
    "env": {
        "alpha": {
            "url_prefix": "http://beta.yinyuetai.com:9019"
        },
        "beta": {
            "url_prefix": "http://beta.yinyuetai.com:9026",
            "url_prefix2":"http://starwbeta.yinyuetai.com"
        },
        "release": {
            "url_prefix": "http://stapi.yinyuetai.com",
            "url_prefix2": "http://starw.yinyuetai.com"
        }
    },
    "prefix": "",
    "domains": {
        "urlStatic": "www.baidu.com",
    }
};
module.exports = config;

# vue_webpack
> vue_webpack项目脚手架，项目所使用的工具如下：
- yarn
- webpack
- vue2
- vue-resource
- vuex

## How use it?
download project

    git clone git@github.com:liminshen/vue2.git


we can using yarn scripts `start` `dev` `product` `test`

- yarn start 启动一个服务器
- yarn test 启动mocha进行自动化测试
- yarn run dev 启动webpack dev构建环境
- yarn run product 启动webpack product 构建可发布的资源

## 目录结构
- app
	- src
		- api
		- component
		- filter
		- images
		- lib
		- stylesheets
		- utils
		- views
		- vuex
		- app.vue
		- config.js
		- main.js
		- routers.js
	- www //自动生成的
- bin
- node_modules

## node插件
- babel全家桶
```
	"babel": "^6.5.2",
    "babel-core": "^6.14.0",
    "babel-plugin-component": "^0.4.1",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-stage-0": "^6.5.0",
    "babel-register": "^6.14.0",
    "babel-runtime": "^6.11.6",
```

- vue全家桶
```
    "vue": "^1.0.27",
    "vue-clipboard": "0.0.1", //复制功能组件
    "vue-hot-reload-api": "^1.3.3",
    "vue-resource": "^1.0.3",//ajax请求
    "vue-router": "^0.7.13",//单页面应用的router
    "vuex": "^1.0.0-rc.2"//状态管理
```
- vue-ui库
```
    "mint-ui": "^0.2.9",
```

- webpack
	```
    "webpack": "^1.13.2"
	```
	- loader
	```
		"autoprefixer-loader": "^3.2.0",
    	"babel-loader": "^6.2.5",
    	"css-loader": "^0.25.0",
	    "file-loader": "^0.9.0",
	    "html-loader": "^0.4.4",
	    "template-html-loader": "0.0.3",
	    "url-loader": "^0.5.7",
    	"vue-loader": "^8.5.2",
	    "vue-html-loader": "^1.2.3",
	    "sass-loader": "^4.0.2",
	    "style-loader": "^0.13.1",
	```
	- plugin
	```
		"clean-webpack-plugin": "^0.1.10",
		"extract-text-webpack-plugin": "^1.0.1",
		"html-webpack-plugin": "^2.22.0",
	```
- other
```
	"fastclick": "^1.0.6",
	"glob": "^7.1.0",
    "gulp": "^3.9.1",
    "browser-sync": "^2.16.0",
    "node-sass": "^3.13.0",//
```

# vue_webpack
> vue_webpack项目脚手架，项目所使用的工具如下：
- webpack
- bower
- npm scripts
- browser-sync
- gulp

## How use it?
download project

    git clone git@github.com:liminshen/vue_webpack.git


we can using npm scripts `start` `dev` `product` `test`

- npm start 启动一个服务器
- npm test 启动mocha进行自动化测试
- npm run dev 启动webpack dev构建环境
- npm run product 启动webpack product 构建可发布的资源

- 目录结构
- app
    - src 开发环境
        - api 接口处理
        - component vue组件
        - images 图片
        - stylesheets 样式
        - utils 工具类
        - views 静态view，只负责展示数据
        - vuex 状态管理
            - action.js
            - modules 配置多个模块
            - mutation-types.je 变化类型
            - store.js 状态容器
        - main.js 入口文件
        - config.js 配置文件，配置接口环境和初始化项
        - routers.js 路由的中间件，处理路由的按需加载
        - app.vue 作为路由的根节点
    - www 生产环境，自动生成
- bin -配置文件
    - alias 别名输出文件
    - getEntrys 这个是获取多入口的工具文件global + path
    - base 基础webpack配置，一下的webpack配置基于当前文件
    - dev 开发环境下的webpack配置
    - product 生产环境下的webpack配置

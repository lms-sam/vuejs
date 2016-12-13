import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import {sync} from 'vuex-router-sync';
import Vuex from 'Vuex';
import store from './store'
import first from './component/firstcomponent.vue'
import second from './component/secondcomponent.vue'
import home from './component/home.vue'
import NotFound from './component/404.vue'
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
const routes = [
{
	path : '/',
	component : home
},

{
	path : '/home',
	component : home
},
{
	path : '/first',
	component : first
},
{
	path : '/second',
	component : second
},
{
	path : '*',
	component : NotFound
}
]
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: routes
});
// sync(store, router);
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	el : '#app',
	store,
  	router,
  	...App
});

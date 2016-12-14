import './styles/index.scss';

import Vue from 'vue';
import store from './vuex/store.js';
import router from './router.js'
import App from './app.vue';

import VueAsyncData from 'vue-async-data';
import { sync } from 'vuex-router-sync';
// import * as filters from './filters/test.js';
import VueResource from 'vue-resource';

import fastclick from 'fastclick';
fastclick.attach(document.body);

// 注册指令
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

sync(store, router);
const { state } = store;

// 路由渲染页面之前
router.beforeEach((route, redirect, next) => {
	// 在这里可以进行loading加载
	// console.log(route)
	// console.log(redirect)
	// console.log(next)
  	next()
})

Vue.use(VueResource);
Vue.use(VueAsyncData);


const app = new Vue({
	router,
	store,
	...App,
}).$mount('#app');

export { app, router,store }

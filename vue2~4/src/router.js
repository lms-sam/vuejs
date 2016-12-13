import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/home',name:'home', component:home },
    { path: '/list',name:'list', component:list },
    { path: '*', redirect: '/home' }
  ]
})

function home(resolve) {
    require.ensure(["./containers/home.vue"], function() {
       require(['./containers/home.vue'], resolve);
    }, 'home');
}

function list(resolve) {
    require.ensure(["./containers/list.vue"], function() {
       require(['./containers/list.vue'], resolve);
    }, 'list');
}

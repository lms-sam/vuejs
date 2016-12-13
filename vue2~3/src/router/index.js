/**
 * Created by Moment on 2016/10/30.
 */

import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Resource)
    //
    // Vue.http.interceptors.push((request, next) => {
    //     NProgress.inc(0.2)
    //
    //     next((response) => {
    //         NProgress.done()
    //         return response
    //     })
    // })

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/',name:'home',component: home},
        {path: '*',name: '404',component :nofound}
    ]
})

function home(resolve) {
    require.ensure(['../components/index.vue'], function() {
        require(['../components/index.vue'], resolve);
    }, 'index');
    // require(['../components/index.vue'], resolve);
}

function nofound(resolve) {
    require.ensure(['../components/404.vue'], function() {
        require(['../components/404.vue'], resolve);
    }, '404');
    // require(['../components/404.vue'], resolve);
}
//
// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     next()
// })
//
// router.afterEach((transition) => {
//     NProgress.done()
// })

export default router

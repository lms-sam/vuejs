import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import  App from './app.vue';
import registerRouters from './routers';
import './stylesheets/commen/reset.scss';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.devtools = true;
var router = new VueRouter({
    hashbang: false,
});
registerRouters(router);
router.start(App, '#app');

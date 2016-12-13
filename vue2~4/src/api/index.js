import Vue from 'vue';
import VueResource from 'vue-resource';
import {homeResource} from './resources.js';
Vue.use(VueResource);

export default {
    getHometData:options=> homeResource().get(Object.assign({port: 'detail'}, options)),
}

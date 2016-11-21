import Vue from 'vue'
import VueResource from 'vue-resource'
import {homeListResource} from './resources'

Vue.use(VueResource);

export default {
	// template
	// getRoomDetail: options => roomResource().get(Object.assign({port: 'detail'}, options)),
	gethomeListDetail: options => homeListResource().get(Object.assign({port: 'home_list'}, options)),
}
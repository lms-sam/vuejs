import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './modules/home.js';
import list from './modules/list.js';

export default new Vuex.Store({
	modules: {
		home,
		list
	}
});

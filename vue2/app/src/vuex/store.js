import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import homeList from './modules/homeList.js';

export default new Vuex.Store({
	modules : {
		homeList
	},
	mutations,
	getters,
	actions,
});
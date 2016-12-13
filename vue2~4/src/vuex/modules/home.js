import * as types from '../mutation-types.js';

import * as actions from '../actions/home.js';

const state = {
	homeList:[],
}

const mutations = {
	[types.HOME_FETCH_ALL_LIST] (state, dataList) {
		state.homeList = dataList;
	}
}

export default {
	state,
	mutations,
	actions
}

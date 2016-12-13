import {
	LIST_SET_ACTIVITY_PROJECT_LIST
} from '../mutation-types'


import * as actions from '../actions/list.js';

const state = {
		activityProjectList:null,
		activityCasetList:null,
		downLoadText:null
}

const mutations = {
	[LIST_SET_ACTIVITY_PROJECT_LIST] (state, dataList) {
		state.list = dataList;
	}
}

export default {
	state,
	mutations,
	actions
}

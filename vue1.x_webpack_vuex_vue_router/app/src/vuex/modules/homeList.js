import {
	RECIED_LIST
} from '../mutation-types'

const state = {
	list: {},
	statPoling: {}
}

const mutations = {
	['test'] (state, data) {
		state.list = data.data.videos;
	}
}

export default {
	state,
	mutations
}